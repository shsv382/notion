import React from 'react';
import './unit.styles.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { stopEditing } from '../../redux/sheet/sheet.actions';

import { IUnit } from '../../redux/unit/unit.types';
import { unitTypes } from '../../redux/sheet/sheet.types';

import PlainTextUnit from './plain-text-unit/plain-text-unit.component';

interface IUnitProps {
    index: number,
    children?: any
}

const Unit:React.FC<IUnitProps> = ({ index }) => {
    const { unitType, text, editing } = useAppSelector(state => state.sheet.units[index])
    const dispatch = useAppDispatch();
    switch(unitType) {
        case unitTypes.plainText:
            return (
                <PlainTextUnit 
                    onBlur={()=>dispatch(stopEditing(index))}
                    text={ index + text } 
                    editing={ editing } 
                />
            )
        default:
            return <div></div>
    }
}

export default Unit;