import { toast } from 'react-toastify'
import manSittingThumbsUp from '../assets/images/people/graphic-designer.png'
import manWalkingEmoji from '../assets/images/people/man_walking.png'
import womanWalkingEmoji from '../assets/images/people/woman_walking.png'
import '../css/Register.css'
import { useState } from 'react'
import Congratulations from '../components/Congratulations'

function Register() {
    const [formData, setFormData] = useState({
        team_name: '',
        phone: '',
        email: '',
        topic: '',
        category: '',
        size: '0',
        agreed: false
    })

    const { team_name, phone, email, topic, category, size, agreed } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(team_name === ''){
            toast.error("Please enter a Team name")
            return
        }

        if(phone === ''){
            toast.error("Please enter a phone number")
            return
        }

        if(email === ''){
            toast.error("Please enter your email")
            return
        }

        if(topic === ''){
            toast.error("Please enter your project topic")
            return
        }

        if(category === ''){
            toast.error("Please enter your project category")
            return
        }

        if(size === ''){
            toast.error("Please enter size of your team")
            return
        }

        if(!agreed){
            toast.warning("Please agree to the terms and conditions to continue")
            return
        }

        toast.success("Form data sent successfully")
        console.log(formData)
    }

  return (
    <main id="register">
        <section className='registration'>
            <div className="image-container">
                <img src={manSittingThumbsUp} alt="animated man sitting at a desk showing thumbs up" />
            </div>
            <div className="text-container">
                <h1>Register</h1>
                <p>Be part of this movement! <img src={womanWalkingEmoji} alt='woman walking'/><img src={manWalkingEmoji} alt='man-walking'/></p>
                <h2>CREATE YOUR ACCOUNT</h2>
                <form onSubmit={onSubmit}>
                    <div className="inputs">
                        <div>
                            <label htmlFor="team_name">Team's name</label>
                            <input name="team_name" id="team_name" type="text" onChange={onChange} value={team_name || ''} placeholder='Enter the name of your group'/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone</label>
                            <input name='phone' id='phone' type="text" onChange={onChange} value={phone || ''} placeholder='Enter your phone number'/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name='email' id='email' type="email" onChange={onChange} value={email || ''} placeholder='Enter your email address'/>
                        </div>
                        <div>
                            <label htmlFor="topic">Project Topic</label>
                            <input name="topic" id='topic' type="text" onChange={onChange} value={topic || ''} placeholder='What is your group project topic'/>
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <select name="category" id="category" onChange={onChange} value={category || ''}>
                                <option value="">Select your category</option>
                                <option value="health">Agriculture</option>
                                <option value="finance">Fin Tech</option>
                                <option value="agric">Agro tech</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="size">Group Size</label>
                            <select name="size" id="size" onChange={onChange} value={size || ''}>
                                <option value="">Select</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                            </select>
                        </div>
                    </div>
                    <span className="highlight">Please review your registration details before submitting</span>
                    <div className='agreement'>
                        <input type="checkbox" onChange={() => setFormData((prevState) => ({...prevState, agreed: !prevState.agreed}))} checked={agreed} name="agreed" id="agreed" />
                        <label htmlFor="agreed">I agreed with the event terms and conditions and privacy policy</label>
                    </div>
                    <button className='btn-primary'>Register Now</button>
                </form>
            </div>
        </section>
        <Congratulations/>
    </main>
  )
}

export default Register