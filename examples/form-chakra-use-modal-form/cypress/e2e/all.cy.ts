/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("form-chakra-use-modal-form", () => {
    const BASE_URL = "http://localhost:3000";

    const mockPost = {
        title: "test title",
        content: "test content",
        status: "published",
    };

    const isModalNotVisible = () => {
        cy.get(".chakra-modal__overlay ").should("not.exist");
    };

    const fillForm = () => {
        cy.get("#title").clear().type(mockPost.title);
        cy.get("#status").select(mockPost.status);
        cy.get("#categoryId").select(1);
    };

    const assertSuccessResponse = (response: any) => {
        const body = response?.body;

        expect(response?.statusCode).to.eq(200);
        expect(body).to.have.property("id");
        expect(body).to.have.property("category");
        expect(body?.title).to.eq(mockPost.title);
        expect(body?.status?.toLowerCase()).to.eq(
            mockPost?.status?.toLowerCase(),
        );

        cy.getChakraUINotification().contains(/success/gi);

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq("/posts");
        });

        isModalNotVisible();
    };

    const submitForm = () => {
        return cy.getSaveButton().click();
    };

    beforeEach(() => {
        cy.visit(BASE_URL);
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
    });

    it("should create record", () => {
        cy.intercept("POST", "/posts").as("createPost");
        cy.getCreateButton().click();

        fillForm();
        submitForm();

        cy.wait("@createPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });

    it("should edit record", () => {
        cy.intercept("GET", "/posts/*").as("getPost");
        cy.intercept("PATCH", "/posts/*").as("editPost");

        // find first row in the table
        cy.get(".chakra-table > tbody > tr")
            .first()
            // get the last column
            .last()
            // get the edit button
            .within(() => {
                cy.getEditButton().click();
            });

        // assert response values are equal to the form values
        cy.wait("@getPost").then((interception) => {
            const response = interception?.response;
            const body = response?.body;

            cy.get("#title").should("have.value", body?.title);
            cy.get("#status").should("have.value", body?.status);
            cy.get("#categoryId").should("have.value", body?.category?.id);
        });

        fillForm();
        submitForm();

        cy.wait("@editPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });
});
