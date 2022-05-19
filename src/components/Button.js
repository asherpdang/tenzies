import React from 'react'

export default function Button(props) {
    const styles = {
        backgroundColor: props.isClicked ? props.isCorrect ? "#94D7A2" : 
        "#F8BCBC" : "transparent"
    }
    
    return (
        <button className="option-button" 
                style={styles}
                onClick={props.handleButtonClick}
                >
        {props.option}
        </button>
    )
}