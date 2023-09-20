import { useState } from "react"
import PropTypes from 'prop-types'

function FAQItem({question, answer}) {
    const [showAnswer, setShowAnswer] = useState(false)

    const toggleAnswerVisibility = () => {
        setShowAnswer((prevState) => !prevState)
    }

  return (
    // todo check for answers to the questions
    <li className="faq-item">
        <div onClick={toggleAnswerVisibility}>
            <div className="question">{question}</div>
            <div className="symbol">{showAnswer ? '-' : '+'}</div>
        </div>
        <div style={{ display: showAnswer ? 'unset' : 'none' }}>
            <p className="answer">
                {answer}
            </p>
        </div>
    </li>
  )
}

FAQItem.defaultProps = {
    question: 'This is a placeholder text for a frequently asked question',
    answer: 'This is a placeholder text for an answer to a frequently asked question'
}

FAQItem.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}

export default FAQItem