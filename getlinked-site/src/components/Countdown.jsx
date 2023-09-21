import { useState, useEffect } from "react"

function Countdown() {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const {days, hours, minutes, seconds} = remainingTime

  return (
    <p className="countdown">
      {days < 10 ? '0' + days: days}<span>D</span>
      {hours  < 10 ? '0' + hours: hours}<span>H</span>
      {minutes < 10 ? '0' + minutes: minutes}<span>M</span>
      {seconds  < 10 ? '0' + seconds: seconds}<span>S</span>
    </p>
  )
}

export default Countdown