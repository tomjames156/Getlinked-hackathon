import { Link } from "react-router-dom"

function Header() {
  return (
    <nav>
        <div>
            <h1 className="company-name"><span>get</span><span>linked</span></h1>
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