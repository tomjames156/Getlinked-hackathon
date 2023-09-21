import libertyWhiteLogo from '../assets/images/companies/Liberty company logo white colour.png'
import libertyPayLogo from '../assets/images/companies/Liberty company logo white.png'
import payboxLogo from '../assets/images/companies/Paybox.png'
import vuzualPlusLogo from '../assets/images/companies/Vizual Plus.png'
import winwiseLogo from '../assets/images/companies/Winwise logo White colour 1.png'
import wisperLogo from '../assets/images/companies/wisper logo white.png'

function Sponsors() {
  return (
    <>
        <div>
            <img
                src={libertyWhiteLogo}
                alt="liberty assured company"
            />
        </div>
        <div>
            <img
                src={libertyPayLogo}
                alt="liberty pay company"
            />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <img
                src={winwiseLogo}
                alt="winwise company"
            />
        </div>
        <div>
            <img
                src={wisperLogo}
                alt="wisper sms"
            />
        </div>
        <div>
            <img
                src={payboxLogo}
                alt="pay box company"
            />
            <span></span>
            <span></span>
        </div>
        <div>
            <img
                src={vuzualPlusLogo}
                alt="vuzual plus design studios"
            />
        </div>
    </>
  )
}

export default Sponsors