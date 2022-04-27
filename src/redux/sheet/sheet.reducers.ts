import { sheetActionTypes, ISheetAction, unitTypes } from "./sheet.types";
import { IUnit } from "../unit/unit.types";
import { 
    addUnitToSheetUtil,
    stopEditingUtil,
} from "./sheet.utils";

interface ISheetInitialState {
    units: IUnit[]
}

const SHEET_INITIAL_STATE: ISheetInitialState = {
    units: []
}

const sheetReducer = (state=SHEET_INITIAL_STATE, action: ISheetAction) => {
    switch (action.type) {
        case sheetActionTypes.ADD_UNIT_TO_SHEET:
            return {
                ...state,
                units: [...addUnitToSheetUtil(state.units)]
            }
        case sheetActionTypes.STOP_EDITING:
            return {
                ...state,
                units: [...stopEditingUtil(state.units, action.payload.index)]
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