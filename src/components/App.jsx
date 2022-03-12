import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';



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
  
  leaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const countGood = this.state.good;
    const countNeutral = this.state.neutral;
    const countBad = this.state.bad;
    const countTotalFeedback = countGood + countNeutral + countBad;
    const countPositiveFeedbackPercentage =
      countTotalFeedback === 0
        ? '0'
        : ((countGood / countTotalFeedback) * 100).toFixed(0);
    return (
      <div className="Feedback">
         <Section title="Please, leave feedback">
            <div>
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.leaveFeedback}
              />
            </div>
          </Section>
          <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={countGood}
              neutral={countNeutral}
              bad={countBad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default Feedback;





// import Feedback from 'components/Feedback'

// export const App = () => {
//   return (
//     <div>
//      <Feedback />
//     </div>
//   );
// };
