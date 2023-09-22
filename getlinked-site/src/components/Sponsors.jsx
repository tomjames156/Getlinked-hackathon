import libertyWhiteLogo from '../assets/images/companies/Liberty company logo white colour.png'
import libertyPayLogo from '../assets/images/companies/Liberty company logo white.png'
import payboxLogo from '../assets/images/companies/Paybox.png'
import vuzualPlusLogo from '../assets/images/companies/Vizual Plus.png'
import winwiseLogo from '../assets/images/companies/Winwise logo White colour 1.png'
import wisperLogo from '../assets/images/companies/wisper logo white.png'
import { motion } from 'framer-motion'

function Sponsors() {
  return (
    <>
        <div>
            <motion.img
                src={libertyWhiteLogo}
                alt="liberty assured company"
                initial={{ x: -200, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            />
        </div>
        <div>
            <motion.img
                src={libertyPayLogo}
                alt="liberty pay company"
                initial={{ opacity: 0}}
                whileInView={{opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <motion.img
                src={winwiseLogo}
                alt="winwise company"
                initial={{ y: -150, opacity: 0}}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            />
        </div>
        <div>
            <motion.img
                src={wisperLogo}
                alt="wisper sms"
                initial={{ x: -200, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            />
        </div>
        <div>
            <motion.img
                src={payboxLogo}
                alt="pay box company"
                initial={{ y: 150, opacity: 0}}
                whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            />
            <span></span>
            <span></span>
        </div>
        <div>
            <motion.img
                src={vuzualPlusLogo}
                alt="vuzual plus design studios"
                initial={{ x: 200, opacity: 0}}
                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                viewport={{once: true, amount: 0.1 }}
            />
        </div>
    </>
  )
}

export default Sponsors