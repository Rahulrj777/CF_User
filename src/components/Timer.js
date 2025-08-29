import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Timer = () => {
  const webinarStartTime = moment.tz('2024-08-10 12:00:00', 'Asia/Kolkata'); // Adjust webinar start time here

  return (
    <div>
      {/* <h1>Webinar Countdown Timer</h1> */}
      <CountdownTimer targetTime={webinarStartTime} />
    </div>
  );
};

const CountdownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = moment();
    const diff = moment.duration(targetTime.diff(now));
    return {
      days: diff.days(),
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds()
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <div className=" flex items-center gap-x-2 px-4 py-2 bg-[#ff0000]">

          <div className=" text-white  rounded">
            <p className="text-[12px] md:text-[18px] font-semibold">{timeLeft.days}  </p>
            {/* <p className="text-[8px] md:text-[12px]">Day{timeLeft.days !== 1 ? 's' : ''}</p> */}
          </div>
          <div className='text-white'>
            :
          </div>
          <div className=" text-white  rounded">
            <p className="text-[12px] md:text-[18px] font-semibold">{timeLeft.hours}</p>
            {/* <p className="text-[8px] md:text-[12px]">Hour{timeLeft.hours !== 1 ? 's' : ''}</p> */}
          </div>
          <div className='text-white'>
            :
          </div>
          <div className=" text-white  rounded">
            <p className="text-[12px] md:text-[18px] font-semibold">{timeLeft.minutes}</p>
            {/* <p className="text-[8px] md:text-[12px]">Minute{timeLeft.minutes !== 1 ? 's' : ''}</p> */}
          </div>
          <div className='text-white'>
            :
          </div>
          <div className=" text-white rounded">
            <p className="text-[12px] md:text-[18px] font-semibold">{timeLeft.seconds}</p>
            {/* <p className="text-[8px] md:text-[12px]">Second{timeLeft.seconds !== 1 ? 's' : ''}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
