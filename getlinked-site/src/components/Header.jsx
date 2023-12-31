import { Link } from "react-router-dom"
import menuBar from '../assets/icons/bars.svg'
import xMark from '../assets/icons/xmark.svg'
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function Header() {
    const [isOpen, setIsOpen] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const closeMenu = () => {
        setIsOpen(false)
    }

    const goTo = path => {
        navigate(path)
        closeMenu()
    }

  return (
    <nav className={isOpen}>
        <div>
            <Link onClick={closeMenu} to='/' className="company-name"><span>get</span><span>linked</span></Link>
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
                <Link onClick={closeMenu} to='/#timeline'>Timeline</Link>
                <Link onClick={closeMenu}to='/#intro'>Overview</Link>
                <Link onClick={closeMenu} to='/#questions'>FAQs</Link>
                <Link onClick={closeMenu} className={`contact ${location.pathname === '/contact' ? 'special' : ''}`} to='/contact'>Contact</Link>
            </div>
            <div className={`register ${location.pathname === '/register' ? 'special'  : ''}`}>
                <button onClick={() => {goTo('/register')}} className="btn-primary">Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Header