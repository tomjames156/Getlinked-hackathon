import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

function CountdownTimer() {
  const targetDate = new Date('November 18, 2023 00:00:00').getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.p 
        className='countdown'
        initial={{ opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0, transition: { duration: 0.5 }}}
        viewport={{once: true, amount: 0.1 }}
    >
        {timeRemaining.days > 9 ? timeRemaining.days :'0'+timeRemaining.days}<span>D</span>
        {timeRemaining.hours > 9 ? timeRemaining.hours : '0'+ timeRemaining.hours}<span>H</span>
        {timeRemaining.minutes > 9 ? timeRemaining.minutes : '0' + timeRemaining.minutes}<span>M</span>
        {timeRemaining.seconds > 9 ? timeRemaining.seconds : '0' + timeRemaining.seconds}<span>S</span>
    </motion.p>
  );
}

export default CountdownTimer;