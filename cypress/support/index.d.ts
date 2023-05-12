/// <reference types="cypress" />

interface ISetAntdDropdownParams {
    id: string;
    selectIndex?: number;
}

interface ISetAntdSelectParams {
    id: string;
    value: string;
}

interface IGetAntdFormItemErrorParams {
    id: string;
}

interface IResourceCreateParams {
    ui: "antd" | "material-ui" | "chakra-ui" | "mantine";
}

interface IResourceEditParams {
    ui: "antd" | "material-ui" | "chakra-ui" | "mantine";
}

interface IGetChakraUIFormItemErrorParams {
    id: string;
    type?: "text" | "select";
}

declare namespace Cypress {
    interface Chainable {
        resourceList(): Chainable<void>;
        resourceCreate(
            params: IResourceCreateParams,
        ): Chainable<JQuery<HTMLElement>>;
        resourceEdit(
            params: IResourceCreateParams,
        ): Chainable<JQuery<HTMLElement>>;
        resourceShow(): Chainable<void>;
        getSaveButton(): Chainable<JQuery<HTMLElement>>;
        getCreateButton(): Chainable<JQuery<HTMLElement>>;
        getDeleteButton(): Chainable<JQuery<HTMLElement>>;
        getEditButton(): Chainable<JQuery<HTMLElement>>;
        getListButton(): Chainable<JQuery<HTMLElement>>;
        getShowButton(): Chainable<JQuery<HTMLElement>>;
        getAntdNotification(): Chainable<JQuery<HTMLElement>>;
        setAntdDropdown(
            params: ISetAntdDropdownParams,
        ): Chainable<JQuery<HTMLElement>>;
        setAntdSelect(
            params: ISetAntdSelectParams,
        ): Chainable<JQuery<HTMLElement>>;
        getAntdFormItemError(
            params: IGetAntdFormItemErrorParams,
        ): Chainable<JQuery<HTMLElement>>;
        getChakraUINotification(): Chainable<JQuery<HTMLElement>>;
        getChakraUIFormItemError(
            params: IGetChakraUIFormItemErrorParams,
        ): Chainable<JQuery<HTMLElement>>;
    }
}
