import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import x from '../assets/icons/x.svg'
import xMark from '../assets/icons/xmark.svg'
import facebook from '../assets/icons/facebook.svg'
import '../css/Contact.css'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'
import Loading from '../components/Loading'
import WhiteStar from '../components/WhiteStar'
import PurpleStar from '../components/PurpleStar'
import PinkStar from '../components/PinkStar'
import GrayStar from '../components/GrayStar'
import { toast } from 'react-toastify';

function Contact() {
    const api = process.env.REACT_APP_API_BASE_URL
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        message: '' 
    })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const { first_name, email, message } = formData

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
            const response = await fetch(`${api}/hackathon/contact-form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.status !== 400){
                toast.success('Your message has been sent')
            }else{
                if(data.email[0] === 'Enter a valid email address.'){
                    toast.error("Please enter a valid email address")
                }else{
                    toast.error("Something went wrong")
                }
                setIsLoading(false)
                return 
            }

        }
        catch(err){
            toast.error('Sorry something went wrong')
        }
        setIsLoading(false)
    }

  return (
    <motion.main 
        id='contact'
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <div className='back-btn' onClick={() => {navigate(-1)}}>
            <i class="fa-solid fa-chevron-left fa-lg"></i>
        </div>
        <GrayStar/>
        <PinkStar/>
        <PurpleStar/>
        <WhiteStar/>
        <section>
            <div>
                <motion.h1
                    initial={{ x: -200, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                >Get in touch</motion.h1>
                <motion.p
                    initial={{ x: -200, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1 }}}
                    viewport={{once: true, amount: 0.1 }}
                >Contact<br/> Information</motion.p>
                <motion.p
                    initial={{ x: -200, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.15 }}}
                    viewport={{once: true, amount: 0.1 }}
                >27,Alara Street<br/> Yaba 100012<br/> Lagos State</motion.p>
                <motion.p
                    initial={{ x: -200, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 }}}
                    viewport={{once: true, amount: 0.1 }}
                >Call Us : 07067981819</motion.p>
                <motion.p
                    initial={{ x: -200, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.25 }}}
                    viewport={{once: true, amount: 0.1 }}
                >we are open from Monday-Friday<br/> 08:00am - 05:00pm</motion.p>
                <motion.div className="socials"
                    initial={{ x: -200, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 }}}
                    viewport={{once: true, amount: 0.1 }}
                >
                    <span>Share on</span>
                    <div>
                        <img src={instagram} alt="instagram" />
                        <img src={x} alt="x" />
                        <img src={facebook} alt="facebook" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ x: 200, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <h2>Questions or need assistance?<br/>Let us know about it!</h2>
                <form onSubmit={onSubmit} noValidate>
                    <input type="first_name" name='first_name' onChange={onChange} id='first_name' value={first_name || ''} required placeholder='First Name'/>
                    <input type="email" name="email" required id='email' placeholder='Mail' value={email || ''} onChange={onChange} />
                    <textarea name="message" required id="message" cols="30" value={message || ''} rows="10" onChange={onChange} placeholder='Message'></textarea>
                    <button type='submit' className='btn-primary'>Submit</button>
                </form>
            </motion.div>
        </section>
        {isLoading && <Loading/>}
    </motion.main>
  )
}

export default Contact