/// <reference types="cypress" />
/// <reference types="./index.d.ts" />

import {
    getAntdNotification,
    setAntdSelect,
    setAntdDropdown,
    getAntdFormItemError,
} from "./commands/antd";
import {
    getChakraUIFormItemError,
    getChakraUINotification,
} from "./commands/chakra-ui";
import {
    getCreateButton,
    getDeleteButton,
    getEditButton,
    getListButton,
    getSaveButton,
    getShowButton,
} from "./commands/refine";
import { list, create, edit, show } from "./commands/resource";

Cypress.Commands.add("resourceList", list);
Cypress.Commands.add("resourceCreate", create);
Cypress.Commands.add("resourceEdit", edit);
Cypress.Commands.add("resourceShow", show);
Cypress.Commands.add("getSaveButton", getSaveButton);
Cypress.Commands.add("getCreateButton", getCreateButton);
Cypress.Commands.add("getDeleteButton", getDeleteButton);
Cypress.Commands.add("getListButton", getListButton);
Cypress.Commands.add("getShowButton", getShowButton);
Cypress.Commands.add("getEditButton", getEditButton);
Cypress.Commands.add("getAntdNotification", getAntdNotification);
Cypress.Commands.add("setAntdSelect", setAntdSelect);
Cypress.Commands.add("setAntdDropdown", setAntdDropdown);
Cypress.Commands.add("getAntdFormItemError", getAntdFormItemError);
Cypress.Commands.add("getChakraUINotification", getChakraUINotification);
Cypress.Commands.add("getChakraUIFormItemError", getChakraUIFormItemError);
