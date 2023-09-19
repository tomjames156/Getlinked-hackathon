import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
        <div className="about-summary">
            <h1 className="company-name"><span>get</span><span>linked</span></h1>
            <p>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
            <div>
                <Link>Terms of Use </Link>
                <div className="vertical-line"></div>
                <Link>Privacy Policy</Link>
            </div>
        </div>
        <div className="useful-links">

        </div>
        <div className="contact"></div>
    </footer>
  )
}

export default Footer