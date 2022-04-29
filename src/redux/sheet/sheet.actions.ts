import { sheetActionTypes, ISheetAction, unitTypes } from "./sheet.types";

export const addUnitToSheet = (): ISheetAction => ({
    type: sheetActionTypes.ADD_UNIT_TO_SHEET
});

export const editUnit = (index: number, text: string): ISheetAction => ({
    type: sheetActionTypes.EDIT_UNIT,
    payload: { index, text }
});

export const toggleUnitCheckbox = (index: number): ISheetAction => ({
    type: sheetActionTypes.TOGGLE_UNIT_CHECKBOX,
    payload: index
});

export const changeUnitType = (index: number, unitType: string) => ({
    type: sheetActionTypes.CHANGE_UNIT_TYPE,
    payload: { index, unitType }
});

export const startEditing = (index: number) => ({
    type: sheetActionTypes.START_EDITING,
    payload: index
})

export const stopEditing = (index: number) => ({
    type: sheetActionTypes.STOP_EDITING,
    payload: index
})

export const removeItem = (index: number) => ({
    type: sheetActionTypes.REMOVE_UNIT,
    payload: index
})

export const clearSheet = () => ({
    type: sheetActionTypes.CLEAR_SHEET
})
