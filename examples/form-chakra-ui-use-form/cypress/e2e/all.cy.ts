/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("form-chakra-ui-use-form", () => {
    const BASE_URL = "http://localhost:5173";

    const mockPost = {
        title: "test title",
        content: "test content",
        status: "published",
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

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq("/posts");
        });
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

        cy.resourceCreate();

        fillForm();
        submitForm();

        cy.wait("@createPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });

    it("should edit record", () => {
        cy.intercept("GET", "/posts/*").as("getPost");
        cy.intercept("PATCH", "/posts/*").as("patchPost");

        cy.visit(`${BASE_URL}/posts/edit/123`);

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

        cy.wait("@patchPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });

    it("should delete record", () => {
        cy.intercept("DELETE", "/posts/*").as("deletePost");

        // find first row in the table
        cy.get(".chakra-table > tbody > tr")
            .first()
            // get the last column
            .last()
            // get the delete button
            .within(() => {
                cy.getDeleteButton().click();
                cy.get(".chakra-popover__body button")
                    .contains(/delete/gi)
                    .click();
            });

        cy.wait("@deletePost").then((interception) => {
            const response = interception?.response;
            expect(response?.statusCode).to.eq(200);
        });
    });

    it("should view record and return to list", () => {
        // find first row in the table
        cy.get(".chakra-table > tbody > tr")
            .first()
            // get the last column
            .last()
            // get the view button
            .within(() => {
                cy.getShowButton().click();
            });
        cy.location("pathname").should("contain", "show");
        cy.getListButton().click();
        cy.location("pathname").should("not.contain", "show");
    });

    it("should create form render errors", () => {
        cy.resourceCreate();

        submitForm();

        cy.getChakraUIFormItemError({ id: "title" }).contains(/required/gi);
        cy.getChakraUIFormItemError({ id: "status", type: "select" }).contains(
            /required/gi,
        );
        cy.getChakraUIFormItemError({
            id: "categoryId",
            type: "select",
        }).contains(/required/gi);
    });

    it("should edit form render errors", () => {
        cy.intercept("GET", "/posts/*").as("getPost");
        cy.intercept("PATCH", "/posts/*").as("patchPost");

        cy.visit(`${BASE_URL}/posts/edit/123`);

        cy.wait("@getPost");

        cy.get("#title").clear();
        cy.get("#status").select([]);
        cy.get("#categoryId").select([]);

        submitForm();

        cy.getChakraUIFormItemError({ id: "title" }).contains(/required/gi);
        cy.getChakraUIFormItemError({ id: "status", type: "select" }).contains(
            /required/gi,
        );
        cy.getChakraUIFormItemError({
            id: "categoryId",
            type: "select",
        }).contains(/required/gi);
    });
});
