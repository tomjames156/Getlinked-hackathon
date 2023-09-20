import '../css/Home.css'
import chain from '../assets/images/animated/chain-9365116-7621444.png'
import spark from '../assets/images/animated/1f4a5.png'
import boyUsingVr from '../assets/images/people/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import glitteryBall from '../assets/images/animated/Image 1.png'
import lightBulb from '../assets/images/animated/Creative 1.png'
import bigIdea from '../assets/images/animated/the big idea 1.png'
import pinkLine from '../assets/images/animated/pink-line.png'
import Countdown from '../components/Countdown'

// Maybe rename images

function Home() {
  return (
    <main>
        <section className='hero'>
            <div>
                <h2>Igniting a Revolution in HR Innovation</h2>
                <img src={pinkLine} alt="pink line" />
            </div>
            
            <div className="content">
                <div>
                    <div className='hackathon-name'>
                        <h1>getlinked Tech Hackathon<span className='highlight'> 1.0</span><span className='images'><img src={chain} alt="chain" />
                        <img src={spark} alt="spark" /></span></h1>
                    </div>
                    <div>
                        <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </div>
                    <button className='btn-primary'>Register</button>
                    <Countdown/>
                    <img src={lightBulb} alt="light bulb" />
                </div>
                <div>
                    <img src={boyUsingVr} alt="boy using VR" />
                    <img className='ball' src={glitteryBall} alt="shiny ball" />
                </div>
            </div>
        </section>
        <article className='intro'>
            <div>
                <img src={bigIdea} alt="the big idea light bulb" />
            </div>
            <div>
                <h2>Introduction to getlinked<br/> <span className='highlight'>tech Hackathon 1.0</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </article>
    </main>
  )
}

export default Home