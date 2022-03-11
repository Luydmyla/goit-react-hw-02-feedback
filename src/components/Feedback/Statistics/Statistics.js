import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics__value">
      <h3 className="Statistics__title">Statistics</h3>
      <div>
        <p> Good: {good} </p>
        <p> Neutral: {neutral} </p>
        <p> Bad: {bad} </p>
      </div>

      <div className="Statistics__total">
        <p> Total: {total} </p>
        <p> PositiveFeedback: {positivePercentage} % </p>
      </div>
    </div>
  );
};
export default Statistics;
