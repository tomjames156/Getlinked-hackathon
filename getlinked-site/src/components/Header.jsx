import { Link } from "react-router-dom"
import menuBar from '../assets/icons/bars.svg'
import xMark from '../assets/icons/xmark.svg'
import { useState } from "react"

function Header() {
    const [isOpen, setIsOpen] = useState('')

  return (
    <nav className={isOpen}>
        {/* todo  animate on scroll from transparent to a background*/}
        <div>
            <Link to='/' className="company-name"><span>get</span><span>linked</span></Link>
            <div className="mobile-nav">
                <div onClick={() => setIsOpen('')}>
                    <img className="x-mark" src={xMark} alt="x mark" />
                </div>
                <div onClick={() => setIsOpen('mobile-open')}>
                    <img className="bars" src={menuBar} alt="menu bar" />
                </div>
            </div>
        </div>
        <div className="links-action-container">
            <div className="links">
                <Link>Timeline</Link>
                <Link>Overview</Link>
                <Link>FAQs</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="action">
                <button className="btn-primary">Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Header