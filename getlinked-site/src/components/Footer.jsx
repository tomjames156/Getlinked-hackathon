import { Link } from "react-router-dom"
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import x from '../assets/icons/x.svg'
import facebook from '../assets/icons/facebook.svg'
import locationMarker from '../assets/icons/location-marker.svg'
import phone from '../assets/icons/phone.svg'

function Footer() {
  return (
    <footer>
        <div className="content">
            <div className="about-summary">
                <div className="summary">
                    <h1 className="company-name"><span>get</span><span>linked</span></h1>
                    <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
                </div>
                <div className="links">
                    <Link>Terms of Use </Link>
                    <div className="vertical-line"></div>
                    <Link>Privacy Policy</Link>
                </div>
            </div>
            <div className="useful-links">
                <h2>Useful Links</h2>
                <Link>Overview</Link>
                <Link>Timeline</Link>
                <Link>FAQs</Link>
                <Link>Register</Link>
                <div className="socials">
                    <h3>Follow us</h3>
                    <div>
                        <img src={instagram} alt="instagram" />
                        <img src={x} alt="x" />
                        <img src={facebook} alt="facebook" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                </div>
            </div>
            <div className="contact">
                <h2>Contact Us</h2>
                <div>
                    <img src={phone} alt="phone" />
                    <span>+234 679 81819</span>
                </div>
                <div>
                    <img src={locationMarker} alt="phone" />
                    <span>27,Alara Street Yaba 100012 Lagos State</span>
                </div>
            </div>
        </div>
        <div className="copyright">
            <small>All rights reserved. © getlinked Ltd.</small>
        </div>
    </footer>
  )
}

export default Footer