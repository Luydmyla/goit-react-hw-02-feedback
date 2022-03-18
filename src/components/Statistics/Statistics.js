import React from 'react';
import './Statistics.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics__feedback">
      {/* <h3 className="Statistics__title">Statistics</h3> */}
      <div>
        <p> Good: {good} </p>
        <p> Neutral: {neutral} </p>
        <p> Bad: {bad} </p>
      </div>

      <div className="Statistics__total">
        <p>
          Total : <span className="Statistics__value"> {total} </span>
        </p>
        <p>
          PositiveFeedback :
          <span className="Statistics__value"> {positivePercentage} % </span>
        </p>
      </div>
    </div>
  );
};
export default Statistics;
