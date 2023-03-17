import React, { useState } from 'react';
import './CountButton.css'

const CountButton = (props) => {
    let [currentCount, setCurrentCount] = useState(true );
    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy);
    }

    let buttonStyles = {
        background: props.buttonColor,
    }
    return (
        <div>
            <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div className='count-display'>{currentCount}</div>
        </div>
    )
}


export default CountButton;