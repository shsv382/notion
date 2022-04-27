export const sheetActionTypes = {
    ADD_UNIT_TO_SHEET: "ADD_UNIT_TO_SHEET",
    EDIT_UNIT: "EDIT_UNIT",
    CHANGE_UNIT_TYPE: "CHANGE_UNIT_TYPE",
    STOP_EDITING: "STOP_EDITING",
    CLEAR_SHEET: "CLEAR_SHEET"
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

