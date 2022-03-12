import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <button
      type="button"
      onClick={onLeaveFeedback}
      className="Feedback__button"
    >
      {options}
    </button>
  );
}

FeedbackOptions.prorpTypes = {
  options: PropTypes.oneOf(['good', 'neutral', 'bad']),
};
export default FeedbackOptions;
