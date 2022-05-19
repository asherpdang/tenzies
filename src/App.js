import React from 'react'
import Main from './components/Main'
import Quiz from './components/Quiz'
import './App.css'

export default function App() {
    const [start, setStart] = React.useState(false)
    const [finishQuiz, setFinishQuiz] = React.useState(false)
    
    function onStart() {
        setStart(true)
    }
    
    function setFinish() {
        setFinish(true)
    }
    
    return (
        <div className="app-container">
            {!start ? <Main onStart={onStart}/> : <Quiz />}
        </div>
    )
}