import React, { useRef, useEffect } from 'react';
import './h1-unit.styles.scss';

const H1Unit = (props) => {
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
            <h1 
                className='unit__elem h1-unit' 
                placeholder="Напиши что-нибудь..."
                contentEditable={ editing }
                onBlur={ onBlur }
                onKeyDown={ onKeyDown }
                onClick={ onClick }
                ref={inputRef}
                >
                    { text }
            </h1> 
    )
}

export default H1Unit;