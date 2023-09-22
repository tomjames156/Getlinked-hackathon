import '../css/Error.css'
import manThinking from '../assets/images/people/cwok_casual_21 1.png'
import { useNavigate } from 'react-router-dom'

function Error404() {
    const navigate = useNavigate()

  return (
    <main id="error">
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
    </main>
  )
}

export default Error404