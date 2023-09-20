function TimelineItem({activity, summary, date, order, reverse}) {
  return (
    <li className={`timeline-item ${reverse ? 'reverse' : ''}`}>
        <div className="activity-summary">
            <h3 className="activity">{activity}</h3>
            <p className="summary">{summary}</p>
        </div>
        <div className="order">
            <span>{order}</span>
            <div className='line'></div>
            <div className='line2'></div>
        </div>
        <p>{date}</p>
    </li>
  )
}

export default TimelineItem