import '../css/Home.css'
import chain from '../assets/images/animated/chain-9365116-7621444.png'
import spark from '../assets/images/animated/1f4a5.png'
import boyUsingVr from '../assets/images/people/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import glitteryBall from '../assets/images/animated/Image 1.png'
import lightBulb from '../assets/images/animated/Creative 1.png'
import bigIdea from '../assets/images/animated/the big idea 1.png'
import pinkLine from '../assets/images/animated/pink-line.png'
import womanSitting from '../assets/images/people/7450159 1.png'
import peoplePlanning from '../assets/images/people/8046554 1.png'
import manThinking from '../assets/images/people/cwok_casual_21 1.png'
import Countdown from '../components/Countdown'
import FAQItem from '../components/FAQItem'
import TimelineItem from '../components/TimelineItem'

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
            <div className='image-container'>
                <img src={bigIdea} alt="the big idea light bulb" />
            </div>
            <div className='text-container'>
                <h2>Introduction to getlinked<br/> <span className='highlight'>tech Hackathon 1.0</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </article>
        <article className='rules'>
            <div className='image-container'>
                <img src={womanSitting} alt="animated 3d woman sitting using a tablet" />
            </div>
            <div className='text-container'>
                <h2>Rules and<br/> <span className='highlight'>Guidelines</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </div>
        </article>
        <article className='judging'>
            <div className='image-container'>
                <img src={peoplePlanning} alt="people working with a plan" />
            </div>
            <div className='text-container'>
                <h2>Judging Criteria<br/> <span className='highlight'>Key attributes</span></h2>
                <p><span className='highlight'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.</p>
                <p><span className='highlight'>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.</p>
                <p><span className="highlight">Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </p>
                <p><span className="highlight">Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </p>
                <p><span className="highlight">Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <button className="btn-primary">Read More</button>
            </div>
        </article>
        <section className='questions'>
            <div className='image-container'>
                <img src={manThinking} alt="animated man sitting on a cloud thinking with question mark" />
            </div>
            <div className='text-container'>
                <h2>Frequently Asked<br/> <span className='highlight'>Questions</span></h2>
                <p>We got answers to the questions that you might want to ask about <span className='bold'>getlinked Hackathon 1.0</span></p>
                <ul className='faqs'>
                    <FAQItem 
                        question={'Can I work on a project I started before the hackathon?'}
                    />
                    <FAQItem 
                        question={'What happens if I need help during the hackathon?'}
                    />
                    <FAQItem 
                        question={"What happens if I don't have an idea for a project?"}
                    />
                    <FAQItem 
                        question={'Can I join a team or do I have to come with one?'}
                    />
                    <FAQItem 
                        question={'What happens after the hackathon ends'}
                    />
                    <FAQItem 
                        question={'Can I work on a project I started before the hackathon?'}
                    />
                </ul>
            </div>
        </section>
        <section className="timeline">
            <div>
                <h2>Timeline</h2>
                <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>
            <ul className='timelines'>
                <TimelineItem 
                    date={'November 18, 2023'}
                    activity={'Hackathon Announcement'}
                    summary={'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register'}
                    order={1}
                />
                <TimelineItem
                    date={'November 18, 2023'}
                    activity={'Teams Registration begins'}
                    summary={'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register'}
                    order={2}
                    reverse={true}
                />
                <TimelineItem 
                    date={'November 18, 2023'}
                    activity={'Teams Registration ends'}
                    summary={'Interested Participants are no longer Allowed to register'}
                    order={3}
                />
                <TimelineItem 
                    date={'November 18, 2023'}
                    activity={'Announcement of the accepted teams and ideas'}
                    summary={'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced'}
                    order={4}
                    reverse={true}
                />
                <TimelineItem 
                    date={'November 18, 2023'}
                    activity={'Getlinked Hackathon 1.0 Offically Begins'}
                    summary={'Accepted teams can now proceed to build their ground breaking skill driven solutions'}
                    order={5}
                />
                <TimelineItem 
                    date={'November 18, 2023'}
                    activity={'Demo Day'}
                    summary={'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day'}
                    order={6}
                    reverse={true}
                />
            </ul>
        </section>
    </main>
  )
}

export default Home