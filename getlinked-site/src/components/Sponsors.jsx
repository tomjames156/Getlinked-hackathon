import libertyWhiteLogo from '../assets/images/companies/Liberty company logo white colour.png'
import libertyPayLogo from '../assets/images/companies/Liberty company logo white.png'
import payboxLogo from '../assets/images/companies/Paybox.png'
import vuzualPlusLogo from '../assets/images/companies/Vizual Plus.png'
import winwiseLogo from '../assets/images/companies/Winwise logo White colour 1.png'
import wisperLogo from '../assets/images/companies/wisper logo white.png'
import { motion } from 'framer-motion'

function Sponsors() {
    return (
        <div className='sponsors'>
            {/* <div className='col 1'> */}
                <div className='sponsor sponsor1'>
                    <motion.img
                        src={libertyWhiteLogo}
                        alt="liberty assured company"
                        initial={{ x: -100, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    />
                </div>
                <hr className='hr1'/>
                <div className='sponsor sponsor2'>
                    <motion.img
                        src={wisperLogo}
                        alt="wisper sms"
                        initial={{ x: -100, opacity: 0}}
                        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    />
                </div>
            {/* </div> */}
            {/* <div className="col 2"> */}
                <div className='vert vertical1'></div>
                <div className="box box1"></div>
                <div className='vert vertical2'></div>
            {/* </div> */}
            {/* <div className="col 3"> */}
                <div className='sponsor sponsor3'>
                    <motion.img
                        src={libertyPayLogo}
                        alt="liberty pay company"
                        initial={{ opacity: 0}}
                        whileInView={{opacity: 1, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    />
                </div>
                <hr className='hr2'/>
                <div className='sponsor sponsor4'>
                    <motion.img
                        src={payboxLogo}
                        alt="pay box company"
                        initial={{ y: 150, opacity: 0}}
                        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                        viewport={{once: true, amount: 0.1 }}
                    />
                </div>
            {/* </div>
            {/* <div className="col 4"> */}
                <div className='vert vertical3'></div>
                <div className="box box2"></div>
                <div className='vert vertical4'></div>
            {/* </div> */}
            {/* <div className="col 5"> */}
                <div className='sponsor sponsor5'>
                    <motion.img
                    src={winwiseLogo}
                    alt="winwise company"
                    initial={{ y: -150, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
                    viewport={{once: true, amount: 0.1 }}
                    />
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
                </div>
            </div>
        // </div>

        // <div className='sponsors-table'>
        //     <div className='sponsor'>
        //         <motion.img
        //             src={libertyWhiteLogo}
        //             alt="liberty assured company"
        //             initial={{ x: -100, opacity: 0}}
        //             whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
        //             viewport={{once: true, amount: 0.1 }}
        //         />
        //     </div>
        //     <div className='vertical'></div>
        //     <div className='sponsor'>
        //         <motion.img
        //             src={libertyPayLogo}
        //             alt="liberty pay company"
        //             initial={{ opacity: 0}}
        //             whileInView={{opacity: 1, transition: { duration: 0.5 }}}
        //             viewport={{once: true, amount: 0.1 }}
        //         />
        //     </div>
        //     <div className='vertical'></div>
        //     <div className='sponsor'>
        //         <motion.img
        //         src={winwiseLogo}
        //         alt="winwise company"
        //         initial={{ y: -150, opacity: 0}}
        //         whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
        //         viewport={{once: true, amount: 0.1 }}
        //         />
        //     </div>


        //     <hr/>
        //     <div className="box"></div>
        //     <hr/>
        //     <div className="box"></div>
        //     <hr/>

            
        //     <div className='sponsor'>
        //         <motion.img
        //             src={wisperLogo}
        //             alt="wisper sms"
        //             initial={{ x: -100, opacity: 0}}
        //             whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
        //             viewport={{once: true, amount: 0.1 }}
        //         />
        //     </div>
        //     <div className='vertical'></div>
        //     <div className='sponsor'>
        //         <motion.img
        //             src={payboxLogo}
        //             alt="pay box company"
        //             initial={{ y: 150, opacity: 0}}
        //             whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
        //             viewport={{once: true, amount: 0.1 }}
        //         />
        //     </div>
        //     <div className='vertical'></div>
        //     <div className='sponsor'>
        //         <motion.img
        //             src={vuzualPlusLogo}
        //             alt="vuzual plus design studios"
        //             initial={{ x: 100, opacity: 0}}
        //             whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
        //             viewport={{once: true, amount: 0.1 }}
        //         />
        //     </div>
        // </div>
    )
//   return (
//     <table>
//         <tr>
//             <td>
//                 <motion.img
//                     src={libertyWhiteLogo}
//                     alt="liberty assured company"
//                     initial={{ x: -100, opacity: 0}}
//                     whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
//                     viewport={{once: true, amount: 0.1 }}
//                 />
//             </td>
//             <td>
//                 <motion.img
//                     src={libertyPayLogo}
//                     alt="liberty pay company"
//                     initial={{ opacity: 0}}
//                     whileInView={{opacity: 1, transition: { duration: 0.5 }}}
//                     viewport={{once: true, amount: 0.1 }}
//                 />
//             </td>
//             <td>
//                 <motion.img
//                     src={winwiseLogo}
//                     alt="winwise company"
//                     initial={{ y: -150, opacity: 0}}
//                     whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
//                     viewport={{once: true, amount: 0.1 }}
//                 />
//             </td>
//         </tr>
//         <tr>
//             <td>
//                 <motion.img
//                     src={wisperLogo}
//                     alt="wisper sms"
//                     initial={{ x: -100, opacity: 0}}
//                     whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
//                     viewport={{once: true, amount: 0.1 }}
//                 />
//             </td>
//             <td>
//                 <motion.img
//                     src={payboxLogo}
//                     alt="pay box company"
//                     initial={{ y: 150, opacity: 0}}
//                     whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
//                     viewport={{once: true, amount: 0.1 }}
//                 />
//             </td>
//             <td>
//                 <motion.img
//                     src={vuzualPlusLogo}
//                     alt="vuzual plus design studios"
//                     initial={{ x: 100, opacity: 0}}
//                     whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 }}}
//                     viewport={{once: true, amount: 0.1 }}
//                 />
//             </td>
//         </tr>
//     </table>
//   )
}

export default Sponsors