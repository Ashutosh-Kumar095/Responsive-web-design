import React from 'react'
import './Button.css';

const STYLES = ['btn-primary','btn-outline' , 'btn-styles'];
const SIZES = ['btn-medium' , 'btn-large'];
const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) && buttonStyle || STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) && buttonSize || STYLES[0];
    return (
        <>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} type={type}>
                {children}
            </button>
        </>
    )
}

export default Button;
