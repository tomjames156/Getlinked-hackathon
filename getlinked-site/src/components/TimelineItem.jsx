import { motion } from 'framer-motion'

function TimelineItem({activity, summary, date, order, reverse}) {
  return (
    <motion.li 
      className={`timeline-item ${reverse ? 'reverse' : ''}`}
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 }}}
      viewport={{once: true, amount: 0.1 }}
    >
        <div className="activity-summary">
            <h3 className="activity">{activity}</h3>
            <p className="summary">{summary}</p>
        </div>
        <div className="order">
            <motion.span
              initial={{ opacity: 0}}
              whileInView={{opacity: 1, transition: { duration: 0.25 }}}
              viewport={{once: true, amount: 0.1 }} 
            >{order}</motion.span>
            <div className='line'></div>
            <div className='line2'></div>
        </div>
        <p>{date}</p>
    </motion.li>
  )
}

export default TimelineItem