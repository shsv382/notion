import React from 'react';
import './unit.styles.scss';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import {
    addUnitToSheet, 
    editUnit, 
    removeItem, 
    startEditing, 
    stopEditing,
    changeUnitType,
    toggleUnitCheckbox 
} from '../../redux/sheet/sheet.actions';

import { unitTypes } from '../../redux/sheet/sheet.types';

import PlainTextUnit from './plain-text-unit/plain-text-unit.component';
import H1Unit from './h1-unit/h1-unit.component';
import Checkbox from './checkbox-unit/checkbox-unit.component';
import Callout from './callout-unit/callout-unit.component';
import { IUnit, IUnitCheckbox } from '../../redux/unit/unit.types';

interface IUnitProps {
    index: number,
    unit: IUnit | IUnitCheckbox,
    children?: any
}

const Unit:React.FC<IUnitProps> = ({ index, unit }) => {
    const { unitType, text, editing, checked } = { ...unit }

    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(startEditing(index));
    }
    
    const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        e.currentTarget.textContent && dispatch(editUnit(index, e.currentTarget.textContent))
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.textContent && dispatch(editUnit(index, e.currentTarget.textContent))
        dispatch(stopEditing(index));
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLDivElement>) => {
        switch(e.key) {
            case "Enter":
                e.preventDefault();
                e.currentTarget.textContent && 
                    dispatch(editUnit(index, e.currentTarget.textContent))  
                dispatch(addUnitToSheet());
                break;
            case "Backspace":
                !e.currentTarget.textContent &&
                    dispatch(removeItem(index));
                break;
            default:
                break;
        }
    }

    const handleChangeType = (unitType: string) => (e: React.MouseEvent) => {
        dispatch(changeUnitType(index, unitType))
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLFormControlsCollection>) => {
        dispatch(toggleUnitCheckbox(index))
    }

    return (
        <div className='unit'>
                    <span className='unit__change-type'>
                        {`/`} 
                        <ul className='unit__change-type__types'>
                            { Object.entries(unitTypes).map(([key,value]) => (
                                <li 
                                key={`${key}-${index}`}
                                className='unit__change-type__type'
                                onClick={handleChangeType(value)}
                                >
                                    { value }
                                </li>
                            )) }
                        </ul>
                    </span>
                    {
                        (unitType === unitTypes.plainText) ?
                        <PlainTextUnit 
                            onClick={handleClick}
                            onInput={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            text={ text } 
                            editing={ editing } 
                        /> : <div></div>
                    }
                    {
                        (unitType === unitTypes.h1) ?
                        <H1Unit 
                            onClick={handleClick}
                            onInput={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            text={ text } 
                            editing={ editing } 
                        /> : <div></div>
                    }
                    {
                        (unitType === unitTypes.callout) ?
                        <Callout
                            onClick={handleClick}
                            onInput={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            text={ text } 
                            editing={ editing } 
                        /> : <div></div>
                    }
                    {
                        (unitType === unitTypes.checkbox) ?
                        <Checkbox 
                            onClick={handleClick}
                            onInput={handleChange}
                            onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                            checked={ checked }
                            onCheck={handleCheckboxChange}
                            text={ text } 
                            editing={ editing } 
                            index={index}
                        /> : <div></div>
                    }
                </div>
    )
}
    
    export default Unit;

