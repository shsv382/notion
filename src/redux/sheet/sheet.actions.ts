import { sheetActionTypes, ISheetAction, unitTypes } from "./sheet.types";

export const addUnitToSheet = (): ISheetAction => ({
    type: sheetActionTypes.ADD_UNIT_TO_SHEET
});

export const editUnit = (index: number, text: string, checked: boolean = false): ISheetAction => ({
    type: sheetActionTypes.EDIT_UNIT,
    payload: { index, text, checked }
});

export const changeUnitType = (index: number, unitType: string) => ({
    type: sheetActionTypes.CHANGE_UNIT_TYPE,
    payload: { index, unitType }
});

export const stopEditing = (index: number) => ({
    type: sheetActionTypes.STOP_EDITING,
    payload: { index }
})

export const clearSheet = () => ({
    type: sheetActionTypes.CLEAR_SHEET
})