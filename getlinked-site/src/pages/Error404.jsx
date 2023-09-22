import '../css/Error.css'
import manThinking from '../assets/images/people/cwok_casual_21 1.png'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Error404() {
    const navigate = useNavigate()

  return (
    <motion.main 
        id="error"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <section className='error404'>
            <div className='image-container'>
                <img src={manThinking} alt="man thinking" />
            </div>
            <div className="text-container">
                <div className='error'>
                    <h1>404</h1>
                    <h2>NOT FOUND</h2>
                </div>
                <p>Sorry, we can't seem to find this page</p>
                <button onClick={() => {navigate('/')}} className='btn-primary'><span><i className="fa-solid fa-house fa-md"></i></span>Back to Home</button>
            </div>
        </section>
    </motion.main>
  )
}

export default Error404