import { Component } from 'react';
import './Feedback.css';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };
  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const countGood = this.state.good;
    const countNeutral = this.state.neutral;
    const countBad = this.state.bad;
    console.log(countGood);
    const countTotalFeedback = countGood + countNeutral + countBad;
    const countPositiveFeedbackPercentage =
      countTotalFeedback === 0 ? '0' : (countGood / countTotalFeedback) * 100;
    console.log(countTotalFeedback);
    console.log(countPositiveFeedbackPercentage);
    return (
      <div className="Feedback">
        <div>
          <h2 className="Statistics__title"> Please, leave feedback </h2>
          <div>
            <button
              type="button"
              //   onClick={() => {
              //     console.log('клікнули на good');
              //   }}
              onClick={this.handleGood}
              className="Feedback__button"
            >
              good
            </button>
            <button
              type="button"
              onClick={this.handleNeutral}
              className="Feedback__button"
            >
              neutral
            </button>
            <button
              type="button"
              onClick={this.handleBad}
              className="Feedback__button"
            >
              bad
            </button>
          </div>
        </div>

        <div className="Statistics__value">
          <h3 className="Statistics__title">Statistics</h3>
          <div>
            <p> Good: {this.state.good} </p>
            <p> Neutral: {this.state.neutral} </p>
            <p> Bad: {this.state.bad} </p>
          </div>
        </div>
        <div className="Statistics__total">
          <p> Total: {countTotalFeedback} </p>
          <p> PositiveFeedback: {countPositiveFeedbackPercentage} % </p>
        </div>
      </div>
    );
  }
}
export default Feedback;
