import React from 'react'
import Button from './Button'
import { nanoid } from 'nanoid'

export default function Question(props) {
    // Copy incorrect/correct answers into one array
    const optionArr = props.incorrect.slice()
    optionArr.push(props.correct)
     
    // Set the states
    const [answered, setAnswered] = React.useState(false)
    const [options, setOptions] = React.useState(() => optionArr.map(item => (item === props.correct) ? {
            id: nanoid(),
            question: item,
            isCorrect: true,
            isClicked: false
         } : {
            id: nanoid(),
            question: item,
            isCorrect: false,
            isClicked: false
         }))
         
         
    function handleButtonClick(id, incScore) {
        !answered && setOptions(options.map(function(item)  {
            if(!item.isClicked && (item.id === id)) {
                if(item.isCorrect) incScore()
                return { ...item, isClicked: !item.isClicked }
            }
            else return item
        }))
        
        setAnswered(true)
    }
    
    let questionArr = options.map(item => (
        <Button 
            key={item.id}
            option={item.question}
            isClicked={item.isClicked}
            isCorrect={item.isCorrect}
            handleButtonClick={() => handleButtonClick(item.id, props.scoreInc)}
        />
    ))
    
    return (
        <div className="question-container">
            <h1 className="question-title">{props.question}</h1>
            <div className="display-options">
                {questionArr}
            </div>
            <hr />
        </div>
    )
}