import React, { useRef, useEffect } from 'react';
import './plain-text-unit.styles.scss';

const PlainTextUnit = (props) => {
    const { 
        text, 
        editing, 
        onClick, 
        onInput, 
        onKeyDown,
        onBlur 
    } = { ...props }
    
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);
    
    return (
            <div 
                className='unit__elem plain-text-unit' 
                placeholder="Напиши что-нибудь..."
                contentEditable={ editing }
                onBlur={ onBlur }
                onKeyDown={ onKeyDown }
                onClick={ onClick }
                ref={inputRef}
                >
                    { text }
            </div> 
    )
}

export default PlainTextUnit;