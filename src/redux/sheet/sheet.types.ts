export const sheetActionTypes = {
    ADD_UNIT_TO_SHEET: "ADD_UNIT_TO_SHEET",
    EDIT_UNIT: "EDIT_UNIT",
    CHANGE_UNIT_TYPE: "CHANGE_UNIT_TYPE",
    START_EDITING: "START_EDITING",
    STOP_EDITING: "STOP_EDITING",
    CLEAR_SHEET: "CLEAR_SHEET",
    TOGGLE_UNIT_CHECKBOX: "TOGGLE_UNIT_CHECKBOX",
    REMOVE_UNIT: "REMOVE_UNIT"
}

export const unitTypes = {
    plainText: "Обычный текст",
    h1: "Заголовок H1",
    callout: "Callout",
    checkbox: "Чекбокс"
}



export interface ISheetAction {
    type: string;
    payload?: any
}

