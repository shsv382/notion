export interface IUnit {
    unitType: string;
    text: string;
    editing: boolean
}

export interface IUnitPlainText extends IUnit {
}

export interface IUnitH1 extends IUnit {
}

export interface IUnitCallOut extends IUnit {
}

export interface IUnitCheckbox extends IUnit {
    checked: boolean
}