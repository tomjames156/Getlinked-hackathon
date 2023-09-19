import { Link } from "react-router-dom"
import menuBar from '../assets/icons/bars.svg'
import xMark from '../assets/icons/xmark.svg'
import { useState } from "react"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={isOpen ? 'mobile-open' : ''}>
        <div>
            <h1 className="company-name"><span>get</span><span>linked</span></h1>
            <div className="mobile-nav">
                <div onClick={() => setIsOpen(false)}>
                    <img className="x-mark" src={xMark} alt="x mark" />
                </div>
                <div onClick={() => setIsOpen(true)}>
                    <img className="bars" src={menuBar} alt="menu bar" />
                </div>
            </div>
        </div>
        <div className="links-action-container">
            <div className="links">
                <Link>Timeline</Link>
                <Link>Overview</Link>
                <Link>FAQs</Link>
                <Link>Contact</Link>
            </div>
            <div className="action">
                <button>Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Header