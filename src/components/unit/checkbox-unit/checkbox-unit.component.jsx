import React, { useRef, useState, useEffect } from 'react';
import './checkbox-unit.styles.scss';

const CheckboxUnit = (props) => {
    const { 
        text, 
        editing, 
        onClick, 
        onInput,
        checked,
        onCheck,
        index, 
        onKeyDown,
        onBlur 
    } = { ...props }
    
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);
    
    return (
            <div className='unit__elem checkbox-unit-container'>
                <input 
                    type="checkbox" 
                    className="checkbox-unit__checkbox"
                    checked={checked} 
                    onClick={onCheck}
                    id={`checkbox-${index}`} />
                <label
                    onClick={onCheck}
                    className="checkbox-unit__label"
                    for={`checkbox-${index}`}></label>
                <div 
                    className={`unit__elem checkbox-unit`} 
                    placeholder="Напиши что-нибудь..."
                    contentEditable={ editing }
                    onBlur={ onBlur }
                    onKeyDown={ onKeyDown }
                    onClick={ onClick }
                    ref={inputRef}
                >
                { text }
                </div>
            </div>
    )
}

export default CheckboxUnit;