import React from 'react';
import './plain-text-unit.styles.scss';

interface IPlainTextUnitProps {
    text: string, 
    editing: boolean,
    onBlur: React.FocusEventHandler
}

const PlainTextUnit: React.FC<IPlainTextUnitProps> = ({ text, editing, onBlur }) => {
    return (
        <div>
            {
                editing ? 
                <input onBlur={onBlur} className='unit plain-text-unit' type="text" value={ text } /> :
                <p className='unit plain-text-unit'>{ text }</p>
            }
        </div>
    )
}

export default PlainTextUnit;