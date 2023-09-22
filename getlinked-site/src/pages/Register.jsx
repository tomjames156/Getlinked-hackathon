import { toast } from 'react-toastify'
import manSittingThumbsUp from '../assets/images/people/graphic-designer.png'
import manWalkingEmoji from '../assets/images/people/man_walking.png'
import womanWalkingEmoji from '../assets/images/people/woman_walking.png'
import successfulMan from '../assets/images/people/successful-man.png'
import successfullyDone from '../assets/images/animated/successfully-done.png'
import checkboxFilled from '../assets/icons/checkmark-box.svg'
import '../css/Register.css'
import { useState } from 'react'
import Loading from '../components/Loading'

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
    const [isLoading, setIsLoading] = useState(false)

    const [congratulations, setCongratulations] = useState(false) 

    const { team_name, phone, email, topic, category, size, agreed } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}))
    }

    const onChangeCheckBox = () => {
        setFormData((prevState) => ({...prevState, agreed: !prevState.agreed}))
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

        // toast.success("Form data sent successfully")
        // setFormData({
        //     team_name: '',
        //     phone: '',
        //     email: '',
        //     topic: '',
        //     category: '',
        //     size: '0',
        //     agreed: false
        // })
        setIsLoading(true)
        console.log(formData)
        setIsLoading(false)
        setCongratulations(true)
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
                        {agreed ? <img src={checkboxFilled} 
                        onClick={onChangeCheckBox} alt="checkbox" /> : <span onClick={onChangeCheckBox} ></span>}
                        <input style={{display: 'none'}} type="checkbox" onChange={onChangeCheckBox} checked={agreed} name="agreed" id="agreed" />
                        <label htmlFor="agreed">I agreed with the event terms and conditions and privacy policy</label>
                    </div>
                    <button className='btn-primary'>Register Now</button>
                </form>
            </div>
        </section>
        <section
            className={`congratulations ${congratulations ? 'shown' : 'hidden'}`}>
            <div>
                <div>
                    <img src={successfullyDone} alt="check mark" />
                    <img src={successfulMan} alt="man celebrating successfully registered" />
                </div>
                <h2>Congratulations<br/> you have successfully Registered!</h2>
                <p>Yes, it was easy and you did it!<br/> check your mail box for next step</p>
                <button onClick={() => setCongratulations(false)} className='btn-primary'>Back</button>
            </div>
        </section>
        {isLoading && <Loading/>}
    </main>
  )
}

export default Register