import { unitTypes } from './sheet.types';
import { IUnit, IUnitCheckbox } from '../unit/unit.types';

export const addUnitToSheetUtil = (units: IUnit[]) => {
    units.map((unit: IUnit) => unit.editing = false)
    units.push({
                    unitType: unitTypes.plainText,
                    text: "Hello",
                    editing: true
                });
    return units;
}

export const stopEditingUtil = (units: IUnit[], index: number) => {
    units[index].editing = false;
    return units;
}
