import { sheetActionTypes, ISheetAction, unitTypes } from "./sheet.types";
import { IUnit, IUnitCheckbox } from "../unit/unit.types";
import * as unitUtils from "./sheet.utils";

interface ISheetInitialState {
    units: Array<IUnit | IUnitCheckbox>
}

interface ISheetToggle {
    units: Array<IUnit | IUnitCheckbox>
}

const SHEET_INITIAL_STATE: ISheetInitialState = {
    units: [
        {
            unitType: unitTypes.plainText,
            text: "",
            editing: true,
            checked: false
        }
    ]
}

const sheetReducer = (state=SHEET_INITIAL_STATE, action: ISheetAction) => {
    switch (action.type) {
        case sheetActionTypes.ADD_UNIT_TO_SHEET:
            return {
                ...state,
                units: [...unitUtils.addUnitToSheetUtil(state.units)]
            }
        case sheetActionTypes.START_EDITING:
            return {
                ...state,
                units: [...unitUtils.startEditingUtil(state.units, action.payload)]
            }
        case sheetActionTypes.STOP_EDITING:
            return {
                ...state,
                units: [...unitUtils.stopEditingUtil(state.units, action.payload)]
            }
        case sheetActionTypes.EDIT_UNIT:
            return {
                ...state,
                units: [...unitUtils.editUnitUtil(state.units, action.payload)]
            }
        case sheetActionTypes.TOGGLE_UNIT_CHECKBOX:
            return {
                ...state,
                units: [...unitUtils.toggleUnitCheckboxUtil(state.units, action.payload)]
            }
        case sheetActionTypes.CHANGE_UNIT_TYPE:
            return {
                ...state,
                units: [...unitUtils.changeUnitTypeUtil(state.units, action.payload)]
            }        
        case sheetActionTypes.REMOVE_UNIT:
            return {
                ...state,
                units: [...unitUtils.removeUnitUtil(state.units, action.payload)]
            }
        case sheetActionTypes.CLEAR_SHEET:
            return {
                ...state,
                units: []
            }
        default:
            return state;
    }
}

export default sheetReducer;