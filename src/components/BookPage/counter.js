import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = ({ count, children }) =>
  <VisibilitySensor>
    {({ isVisible }) => (
      <div>
        <h3 className="total-number-1 text-center">{isVisible ? <CountUp start={0} end={count} duration={1} delay={1/2} /> : null}</h3>
        {children}
      </div>
    )}
  </VisibilitySensor>


export const BookPageCounter = () => (
  <div className="counter text-center">
    <div className="container">
      <div className="row">
        <div className="slide-bottom col-sm-3 col-xs-6">
          <i className="fa fa-file-text fa-3x"></i>
          <Counter count={142}>Liczba stron</Counter>
        </div>
        <div className="slide-bottom col-sm-3 col-xs-6">
          <i className="fa fa-graduation-cap fa-3x"></i>
          <Counter count={674}>Zadowolonych klientów poprzedniej książki „Sekrety domowej pizzy”</Counter>
        </div>
        <div className="slide-bottom col-sm-3 col-xs-6">
          <i className="fa fa-facebook-square fa-3x"></i>
          <Counter count={1638}>
            Lubi na Facebooku
          </Counter>
        </div>
        <div className="slide-bottom col-sm-3 col-xs-6">
          <i className="fa fa-users fa-3x"></i>
          <Counter count={8534}>
            Czyta newsletter
          </Counter>
        </div>
      </div>
    </div>
  </div>
)