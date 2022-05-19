import React from 'react'
import Question from './Question'

export default function Quiz() {
    const [questions, setQuestions] = React.useState(() => {})
    const [score, setScore] = React.useState(() => 0)
    const [finished, setFinished] = React.useState(false)
    
    React.useEffect(() => {
        setQuestions(() => {
            fetch("https://opentdb.com/api.php?amount=5&type=multiple")
             .then(res => res.json())
             .then(data => setQuestions(data.results.map((item, index) => ({
                 id: index,
                 category: item.category,
                 type: item.type,
                 difficulty: item.difficulty,
                 question: item.question,
                 correct: item.correct_answer,
                 incorrect: item.incorrect_answers
             }))))
        })
    }, [])
    
    function scoreHelper() {
        setScore(score + 1)
    }
    
    function finishQuiz() {
        // Add finish condition
        setFinished(true)
    }
    
    function mapQuestions() {
        if(questions) {
            return questions.map(item => (
                <Question 
                    key={item.id}
                    category={item.category}
                    type={item.type}
                    difficulty={item.difficulty}
                    question={item.question}
                    correct={item.correct}
                    incorrect={item.incorrect}
                    scoreInc={scoreHelper}
                />
            ))
        }
    }
    const renderQuestions = mapQuestions();
    return (
        <div className="quiz-container">
            {renderQuestions}
            <button className="submit-button" onClick={finishQuiz}>{!finished ? "Submit" : "Retry"}</button>
            <span className="score">{finished ? "Score: " + score + "/" + questions.length : ""}</span>
        </div>
    )
}