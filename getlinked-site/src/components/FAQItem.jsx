import { useState } from "react"
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

function FAQItem({question, answer, delay}) {
    const [showAnswer, setShowAnswer] = useState(false)

    const toggleAnswerVisibility = () => {
        setShowAnswer((prevState) => !prevState)
    }

  return (
    // todo check for answers to the questions
    <motion.li 
        className="faq-item"
        initial={{ x: 100, opacity: 0}}
        whileInView={{x: 0, opacity: 1, transition: { duration: 0.5, delay: delay}}}
        viewport={{once: true, amount: 0.1 }}
    >
        <div onClick={toggleAnswerVisibility}>
            <div className="question">{question}</div>
            <div className="symbol">{showAnswer ? '-' : '+'}</div>
        </div>
        <div style={{ display: showAnswer ? 'unset' : 'none' }}>
            <p className="answer">
                {answer}
            </p>
        </div>
    </motion.li>
  )
}

FAQItem.defaultProps = {
    question: 'This is a placeholder text for a frequently asked question',
    answer: 'This is a placeholder text for an answer to a frequently asked question',
    delay: 0
}

FAQItem.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
    delay: PropTypes.number
}

export default FAQItem