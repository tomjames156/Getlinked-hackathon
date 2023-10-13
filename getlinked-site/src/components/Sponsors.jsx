import libertyWhiteLogo from '../assets/images/companies/Liberty company logo white colour.png'
import libertyAssuredMobile from '../assets/images/companies/liberty_company_mobile.png'
import libertyPayLogo from '../assets/images/companies/Liberty company logo white.png'
import libertyPayMobile from '../assets/images/companies/liberty_company_2_mobile.png'
import vuzualPlusLogo from '../assets/images/companies/Vizual Plus.png'
import vuzualPlusMobile from '../assets/images/companies/vuzual_plus_mobile.png'
import winwiseLogo from '../assets/images/companies/Winwise logo White colour 1.png'
import winwiseMobile from '../assets/images/companies/winwise_logo_mobile.png'
import wisperLogo from '../assets/images/companies/wisper logo white.png'
import wisperMobile from '../assets/images/companies/wisper_logo_mobile.png'
import { motion } from 'framer-motion'

function Sponsors() {
    return (
        <div className='sponsors'>
            <div className='sponsor sponsor1'>
                <motion.img
                    src={libertyWhiteLogo}
                    alt="liberty assured company"
                    initial={{ x: -100, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
                <motion.img
                    src={libertyAssuredMobile}
                    alt="liberty assured company"
                    initial={{ x: -100, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
            </div>
            <hr className='hr1'/>
            <div className='sponsor sponsor2'>
                <motion.img
                    src={libertyPayLogo}
                    alt="liberty pay company"
                    initial={{ opacity: 0}}
                    whileInView={{opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
                <motion.img
                    src={libertyPayMobile}
                    alt="liberty pay company"
                    initial={{ opacity: 0}}
                    whileInView={{opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
            </div>
            <div className='vert vertical1'></div>
            <div className="box box1"></div>
            <div className='vert vertical2'></div>
            <div className='sponsor sponsor3'>
                <motion.img
                    src={winwiseLogo}
                    alt="winwise company"
                    initial={{ y: -150, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
                <motion.img
                    src={winwiseMobile}
                    alt="winwise company"
                    initial={{ y: -150, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
            </div>
            <hr className='hr2'/>
            <div className='sponsor sponsor4'>
                <motion.img
                    src={wisperLogo}
                    alt="wisper sms"
                    initial={{ x: -100, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
                <motion.img
                    src={wisperMobile}
                    alt="wisper sms"
                    initial={{ x: -100, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
            </div>
            <div className='vert vertical3'></div>
            <div className="box box2"></div>
            <div className='vert vertical4'></div>
            <div className='sponsor sponsor5'>
                <motion.div 
                    className="paybox-logo"
                    initial={{ y: 150, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                >Pay<span>box</span></motion.div>
            </div>
            <hr className='hr3'/>
            <div className='sponsor sponsor6'>
                <motion.img
                    src={vuzualPlusLogo}
                    alt="vuzual plus design studios"
                    initial={{ x: 100, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
                <motion.img
                    src={vuzualPlusMobile}
                    alt="vuzual plus design studios"
                    initial={{ x: 100, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                />
            </div>
        </div>
    )
}

export default Sponsors