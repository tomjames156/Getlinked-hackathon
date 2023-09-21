import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import x from '../assets/icons/x.svg'
import facebook from '../assets/icons/facebook.svg'
import '../css/Contact.css'
import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        message: '' 
    })
// validate formData
    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
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
                <form onSubmit={onSubmit}>
                    <input type="fname" name='fname' onChange={onChange} id='fname' required placeholder='First Name'/>
                    <input type="email" name="email" required id='email' placeholder='Mail' onChange={onChange} />
                    <textarea name="message" required id="message" cols="30" rows="10" onChange={onChange} placeholder='Message'></textarea>
                    <button type='submit' className='btn-primary'>Submit</button>
                </form>
            </div>
        </section>
    </main>
  )
}

export default Contact