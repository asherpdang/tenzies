import React from 'react'

export default function Main(props) {
    return (
        <main className="main-container">
            <h1 className="quiz-title">Quizzical</h1>
            <p className="quiz-description">Some random questions!</p>
            <button className="start-button" onClick={props.onStart}>Start Quiz</button>
        </main>
    )
}