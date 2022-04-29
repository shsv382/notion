import { unitTypes } from './sheet.types';
import { IUnit, IUnitCheckbox } from '../unit/unit.types';

export const addUnitToSheetUtil = (units: Array<IUnit | IUnitCheckbox>): Array<IUnit | IUnitCheckbox> => {
    units.map((unit: IUnit) => unit.editing = false)
    units.push({
                    unitType: unitTypes.plainText,
                    text: "",
                    editing: true,
                    checked: false
                });
    return units;
}

interface IEditUnitUtilParams {
    index: number, text: string, checked: boolean
}

export const editUnitUtil = (units: Array<IUnit | IUnitCheckbox>, payload: IEditUnitUtilParams): Array<IUnit | IUnitCheckbox> => {
    units[payload.index] = {...units[payload.index], text: payload.text}
    return [ ...units ]
}

export const toggleUnitCheckboxUtil = (units: Array<IUnit | IUnitCheckbox>, index: number) => {
    units[index] = {...units[index], checked: !units[index].checked}
    return [ ...units ]
}

export const startEditingUtil = (units: Array<IUnit | IUnitCheckbox>, index: number): Array<IUnit | IUnitCheckbox> => {
    units[index].editing = true;
    return units;
}

export const stopEditingUtil = (units: Array<IUnit | IUnitCheckbox>, index: number): Array<IUnit | IUnitCheckbox> => {
    units[index].editing = false;
    return units;
}

export const removeUnitUtil = (units: Array<IUnit | IUnitCheckbox>, index: number) => {
    return [...units.slice(0, index), ...units.slice(index+1)]
}

interface IChangeUnitTypeUtil {
    index: number, unitType: string
}

export const changeUnitTypeUtil = (units: Array<IUnit | IUnitCheckbox>, payload: IChangeUnitTypeUtil): Array<IUnit | IUnitCheckbox> => {
    units[payload.index].unitType = payload.unitType;
    return units;
}