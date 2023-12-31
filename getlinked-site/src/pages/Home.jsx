import '../css/Home.css'
import chain from '../assets/images/animated/chain-9365116-7621444.png'
import spark from '../assets/images/animated/1f4a5.png'
import boyUsingVr from '../assets/images/people/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import glitteryBall from '../assets/images/animated/Image 1.png'
import lightBulb from '../assets/images/animated/Creative 1.png'
import bigIdea from '../assets/images/animated/the big idea 1.png'
import pinkLine from '../assets/images/animated/pink-line.png'
import pinkArrow from '../assets/images/animated/arrow.png'
import womanSitting from '../assets/images/people/7450159 1.png'
import peoplePlanning from '../assets/images/people/8046554 1.png'
import manThinking from '../assets/images/people/cwok_casual_21 1.png'
import manStandingPadlock from '../assets/images/people/08 1.png'
import goldMedal from '../assets/images/animated/gold_medal.png'
import silverMedal from '../assets/images/animated/silver_medal.png'
import bronzeMedal from '../assets/images/animated/bronze_medal.png'
import trophy from '../assets/images/animated/9486889 1.png'
import ellipse from '../assets/images/animated/Ellipse 1.png'
import FAQItem from '../components/FAQItem'
import TimelineItem from '../components/TimelineItem'
import Sponsors from '../components/Sponsors'
import PolicyTerm from '../components/PolicyTerm'
import CountdownTimer from '../components/CountdownTimer'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import HeaderHome from '../components/HeaderHome'
import GrayStar from '../components/GrayStar'
import WhiteStar from '../components/WhiteStar'
import PurpleStar from '../components/PurpleStar'
import PinkStar from '../components/PinkStar'

// Maybe rename images
// add lazy loading for some images

function Home() {

    useEffect(() => {
        const hash = window.location.hash;
        
        if (hash) {
        const section = document.querySelector(hash);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        }

    }, []);

  return (
    <>
    <HeaderHome/>
    <motion.main 
        id='home'
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <section id='hero' className='hero'>
            <WhiteStar/>
            <GrayStar/>
            <GrayStar id="gray-2"/>
            <motion.div
                initial={{ opacity: 0, x: 250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <h2>Igniting a Revolution in HR Innovation</h2>
                <img src={pinkLine} alt="pink line" />
            </motion.div>
            
            <div className="content">
                <motion.div
                    initial={{ opacity: 0, x: -250}}
                    whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                >
                    <div className='hackathon-name'>
                        <h1>getlinked Tech Hackathon<span className='highlight'> 1.0</span><span className='images'><img src={chain} alt="chain" />
                        <img src={spark} alt="spark" /></span></h1>
                    </div>
                    <div>
                        <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </div>
                    <button className='btn-primary'>Register</button>
                    <CountdownTimer/>
                    <img src={lightBulb} alt="light bulb" />
                </motion.div>
                <div>
                    {/* <img src={boyUsingVr} alt="boy using VR" />
                    <img className='ball' src={glitteryBall} alt="shiny ball" /> */}
                </div>
            </div>
        </section>
        <article id='intro' className='intro'>
            <PurpleStar/>
            <PinkStar/>
            <motion.div 
                className='image-container'
                initial={{ opacity: 0, x: -250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <img src={bigIdea} alt="the big idea light bulb" />
                <img className='arrow' src={pinkArrow} alt="gradient coily arrow" />
            </motion.div>
            <motion.div 
                className='text-container'
                initial={{ opacity: 0, x: 250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <h2>Introduction to getlinked<br/> <span className='highlight'>tech Hackathon 1.0</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </motion.div>
        </article>
        <article className='rules'>
            <GrayStar/>
            <WhiteStar/>
            <motion.div 
                className='text-container'
                initial={{ opacity: 0, x: -250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <h2>Rules and<br/> <span className='highlight'>Guidelines</span></h2>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
            </motion.div>
            <motion.div 
                className='image-container'
                initial={{ opacity: 0, x: 250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <img src={womanSitting} alt="animated 3d woman sitting using a tablet" />
                <img className='ellipse' src={ellipse} alt="gradient ellipse" />
            </motion.div>
        </article>
        <article className='judging'>
            <PurpleStar/>
            <GrayStar/>
            <WhiteStar/>
            <motion.div 
                className='image-container'
                initial={{ opacity: 0, x: -250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <img className='ellipse' src={ellipse} alt="gradient ellipse" />
                <img src={peoplePlanning} alt="people working with a plan" />
            </motion.div>
            <motion.div 
                className='text-container'
                initial={{ opacity: 0, x: 250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
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
            </motion.div>
        </article>
        <a href="#questions"></a>
        <section id='questions' className='questions'>
            <PurpleStar/>
            <PurpleStar id='purple-2' />
            <WhiteStar/>
            <GrayStar/>
            <div className='text-container'>
                <h2>Frequently Asked<br/> <span className='highlight'>Questions</span></h2>
                <p>We got answers to the questions that you might want to ask about <span className='bold'>getlinked Hackathon 1.0</span></p>
                <ul className='faqs'>
                    <FAQItem 
                        question={'Can I work on a project I started before the hackathon?'}
                    />
                    <FAQItem 
                        question={'What happens if I need help during the hackathon?'}
                        delay={0.1}
                    />
                    <FAQItem 
                        question={"What happens if I don't have an idea for a project?"}
                        delay={0.15}
                    />
                    <FAQItem 
                        question={'Can I join a team or do I have to come with one?'}
                        delay={0.20}
                    />
                    <FAQItem 
                        question={'What happens after the hackathon ends'}
                        delay={0.25}
                    />
                    <FAQItem 
                        question={'Can I work on a project I started before the hackathon?'}
                        delay={0.3}
                    />
                </ul>
            </div>
            <motion.div 
                className='image-container'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <motion.p 
                    initial={{ textShadow: 'white 0px 0px 3px' }}
                    whileInView={{ textShadow: '#D434FE 0px 0px 3px', transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                >?</motion.p>
                <motion.p 
                    initial={{ textShadow: 'white 0px 0px 3px' }}
                    whileInView={{ textShadow: '#D434FE 0px 0px 3px', transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                >?</motion.p>
                <motion.p 
                    initial={{ textShadow: 'white 0px 0px 3px' }}
                    whileInView={{ textShadow: '#D434FE 0px 0px 3px', transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                >?</motion.p>
                <img src={manThinking} alt="animated man sitting on a cloud thinking with question mark" />
            </motion.div>
        </section>
        <a href="#timeline"></a>
        <section id='timeline' className="timeline">
            <WhiteStar/>
            <PurpleStar/>
            <GrayStar/>
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
        <section className="prizes">
            <WhiteStar/>
            <WhiteStar id='white-2'/>
            <WhiteStar id='white-3'/>
            <PurpleStar/>
            <GrayStar/>
            <motion.div 
                className="image-container"
                initial={{ opacity: 0, x: -250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.75 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <img src={trophy} alt="trophy and dart board beside" />
            </motion.div>
            <div className="text-container">
                <div>
                    <h2>Prizes and<br/> <span className='highlight'>Rewards</span></h2>
                    <p>Highlight of the prizes or rewards for winners and for participants</p>
                </div>
                <ul className="rewards">                    
                    <motion.li 
                        id='second'
                        initial={{ opacity: 0, y: -50}}
                        whileInView={{opacity: 1, y: 0, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    >
                        <img src={silverMedal} alt="silver medal second place" />
                        <div>
                            <h3 className="position"><span>2nd</span><br/>Runner</h3>
                            <h2 className="reward">N300000</h2>
                        </div>
                    </motion.li>
                    <motion.li 
                        id='first'
                        initial={{ opacity: 0, y: 70}}
                        whileInView={{opacity: 1, y: 0, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    >
                        <img src={goldMedal} alt="gold medal first place" />
                        <div>
                            <h3 className="position"><span>1st</span><br/>Runner</h3>
                            <h2 className="reward">N400000</h2>
                        </div>
                    </motion.li>
                    <motion.li 
                        id='third'
                        initial={{ opacity: 0, y: -40}}
                        whileInView={{opacity: 1, y: 0, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    >
                        <img src={bronzeMedal} alt="bronze medal third place" />
                        <div>
                            <h3 className="position"><span>3rd</span><br/>Runner</h3>
                            <h2 className="reward">N150000</h2>
                        </div>
                    </motion.li>
                </ul>
            </div>
        </section>
        <section className="partners-sponsors">
            <WhiteStar/>
            <PurpleStar id="purple-2"/>
            <PurpleStar/>
            <div>
                <h2>Partners and Sponsors</h2>
                <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
            </div>
            <div className='all_sponsors'>
                <Sponsors/>
            </div>
        </section>
        <section className="privacy-policy">
            <WhiteStar id="white-1"/>
            <PurpleStar id="purple-1"/>
            <GrayStar id="gray-1"/>
            <WhiteStar id="white-2"/>
            <PurpleStar id="purple-2"/>
            <GrayStar id="gray-2"/>
            <PurpleStar id="purple-3"/>
            <motion.div 
                className="text-container"
                initial={{ opacity: 0, x: -250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <h2>Privacy Policy and<br/> <span className='highlight'>Terms</span></h2>
                <p className='last_updated'>Last updated on September 12, 2023</p>
                <p>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
                <div className='policy'>
                    <p>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                    </p>
                    <div>
                        <h3>Licensing Policy</h3>
                        <h4>Here are terms of our Standard License:</h4>
                        <ul className='terms'>
                            <PolicyTerm 
                                term={'The Standard License grants you a non-exclusive right to navigate and register for our event'}
                            />
                            <PolicyTerm 
                                term={'You are licensed to use the item available at any free source sites, for your project developement'}
                            />
                        </ul>
                        <button className='btn-primary'>Read More</button>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className="image-container"
                initial={{ opacity: 0, x: 250}}
                whileInView={{opacity: 1, x: 0, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            >
                <img src={manStandingPadlock} alt="animated man standing on a padlock holding a key" />
            </motion.div>
        </section>
    </motion.main>
    </>
  )
}

export default Home