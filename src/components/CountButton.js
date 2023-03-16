import React, { useState } from 'react';

const CountButton = (props) => {
    let [currentCount, setCurrentCount] = useState(0);
    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy);
    }

    let buttonStyles = {
        background: props.buttonColor,
    }
    return (
        <div>
            <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div>{currentCount}</div>
        </div>
    )
}


export default CountButton;