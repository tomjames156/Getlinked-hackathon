import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import x from '../assets/icons/x.svg'
import facebook from '../assets/icons/facebook.svg'
import '../css/Contact.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Loading from '../components/Loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const api = process.env.REACT_APP_API_BASE_URL
    console.log(api)
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        message: '' 
    })
    const [isLoading, setIsLoading] = useState(false)

    const { first_name, email, message } = formData

// validate formData
    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (formData.email === ''){
            toast.error("Please enter your email")
            return
        }

        if (formData.first_name === ''){
            toast.error("Please enter your firstname")
            return
        }

        if(formData.message === ''){
            toast.error("Please enter a message")
            return
        }

        setIsLoading(true)

        try{
            await fetch(`${api}/hackathon/contact-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            toast.success('Your message has been sent')
        }
        catch(err){
            toast.error('Sorry something went wrong')
        }
        
        setIsLoading(false)
    }

  return (
    <main id='contact'>
        <section>
            <div>
                <h1>Get in touch</h1>
                <p>Contact<br/> Information</p>
                <p>27,Alara Street<br/> Yaba 100012<br/> Lagos State</p>
                <p>Call Us : 07067981819</p>
                <p>we are open from Monday-Friday<br/> 08:00am - 05:00pm</p>
                <div className="socials">
                    <span>Share on</span>
                    <div>
                        <img src={instagram} alt="instagram" />
                        <img src={x} alt="x" />
                        <img src={facebook} alt="facebook" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>
            <div>
                <h2>Questions or need assistance?<br/>Let us know about it!</h2>
                <form onSubmit={onSubmit} noValidate>
                    <input type="first_name" name='first_name' onChange={onChange} id='first_name' value={first_name || ''} required placeholder='First Name'/>
                    <input type="email" name="email" required id='email' placeholder='Mail' value={email || ''} onChange={onChange} />
                    <textarea name="message" required id="message" cols="30" value={message || ''} rows="10" onChange={onChange} placeholder='Message'></textarea>
                    <button type='submit' className='btn-primary'>Submit</button>
                </form>
            </div>
        </section>
        {isLoading && <Loading/>}
    </main>
  )
}

export default Contact