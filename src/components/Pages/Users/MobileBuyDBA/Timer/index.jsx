import React, { useEffect, useState } from 'react';
import L from 'i18n-react';
import moment from 'moment';

const Timer = ({ nextPeriodDate }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(nextPeriodDate * 1000 - new Date().getTime());
  }, []);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1000), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="timer-container">
      <div className="timer-block">
        <div className="timer-item">
          <p className="timer-item__value">
            {counter <= 0 ? '000' : moment(counter)?.format('DD')}
          </p>
          <p className="timer-item__text">
            {L.translate('Pages.Users.MobileBuyDBA.Timer.item1')}
          </p>
        </div>
        <div className="timer-block__devider">:</div>
        <div className="timer-item">
          <p className="timer-item__value">
            {counter <= 0 ? '00' : moment(counter)?.format('HH')}
          </p>
          <p className="timer-item__text">
            {L.translate('Pages.Users.MobileBuyDBA.Timer.item2')}
          </p>
        </div>
        <div className="timer-block__devider">:</div>
        <div className="timer-item">
          <p className="green timer-item__value">
            {counter <= 0 ? '00' : moment(counter)?.format('mm')}
          </p>
          <p className="timer-item__text">
            {L.translate('Pages.Users.MobileBuyDBA.Timer.item3')}
          </p>
        </div>
        <div className="timer-block__devider">:</div>
        <div className="timer-item">
          <p className="red timer-item__value">
            {counter <= 0 ? '00' : moment(counter)?.format('ss')}
          </p>
          <p className="timer-item__text">
            {L.translate('Pages.Users.MobileBuyDBA.Timer.item4')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
