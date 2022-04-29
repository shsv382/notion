import React, { useRef, useEffect } from 'react';
import './callout-unit.styles.scss';

const CalloutUnit = (props) => {
    const { 
        text, 
        editing, 
        tabindex,
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
                className='unit__elem callout-unit' 
                placeholder="Напиши что-нибудь..."
                tabIndex={ tabindex }
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

export default CalloutUnit;