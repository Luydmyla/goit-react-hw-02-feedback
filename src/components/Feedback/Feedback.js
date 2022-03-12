// import { Component } from 'react';
// import FeedbackOptions from './FeedbackOptions';
// import Statistics from './Statistics';
// import Notification from './Notification';
// import Section from './Section';

// import './Feedback.css';

// class Feedback extends Component {
//   static defaultProps = {
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//   };
//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };
//   // leaveFeedbackGood = () => {
//   //   this.setState(prevState => ({
//   //     good: prevState.good + 1,
//   //   }));
//   // };
//   // leaveFeedbackNeutral = () => {
//   //   this.setState(prevState => ({
//   //     neutral: prevState.neutral + 1,
//   //   }));
//   // };
//   // leaveFeedbackBad = () => {
//   //   this.setState(prevState => ({
//   //     bad: prevState.bad + 1,
//   //   }));
//   // };
//   leaveFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   render() {
//     const countGood = this.state.good;
//     const countNeutral = this.state.neutral;
//     const countBad = this.state.bad;
//     // console.log(countGood);
//     const countTotalFeedback = countGood + countNeutral + countBad;
//     const countPositiveFeedbackPercentage =
//       countTotalFeedback === 0
//         ? '0'
//         : ((countGood / countTotalFeedback) * 100).toFixed(0);
//     return (
//       <div className="Feedback">
//         <div>
//           {/* <h2 className="Statistics__title"> Please, leave feedback </h2> */}
//           <Section title="Please, leave feedback">
//             <div>
//               <FeedbackOptions
//                 options={['good', 'neutral', 'bad']}
//                 onLeaveFeedback={this.leaveFeedback}
//               />
//               {/* <FeedbackOptions
//                 options={'good'}
//                 onLeaveFeedback={() => this.leaveFeedback('good')}
//               />
//               <FeedbackOptions
//                 options={'neutral'}
//                 onLeaveFeedback={() => this.leaveFeedback('neutral')}
//               />
//               <FeedbackOptions
//                 options={'bad'}
//                 onLeaveFeedback={() => this.leaveFeedback('bad')}
//               /> */}
//               {/* <button
//                 type="button"
//                 //   onClick={() => {
//                 //     console.log('клікнули на good');
//                 //   }}
//                 onClick={this.leaveFeedbackGood}
//                 className="Feedback__button"
//               >
//                 good
//               </button> */}
//               {/* <button
//                 type="button"
//                 onClick={this.leaveFeedbackNeutral}
//                 className="Feedback__button"
//               >
//                 neutral
//               </button>
//               <button
//                 type="button"
//                 onClick={this.leaveFeedbackBad}
//                 className="Feedback__button"
//               >
//                 bad
//               </button> */}
//             </div>
//           </Section>
//         </div>

//         {/* <div className="Statistics__value">
//           <h3 className="Statistics__title">Statistics</h3>
//           <div>
//             <p> Good: {this.state.good} </p>
//             <p> Neutral: {this.state.neutral} </p>
//             <p> Bad: {this.state.bad} </p>
//           </div>
//         </div> */}
//         {/* <div className="Statistics__total">
//           <p> Total: {countTotalFeedback} </p>
//           <p> PositiveFeedback: {countPositiveFeedbackPercentage} % </p>
//         </div> */}
//         <Section title="Statistics">
//           {countTotalFeedback ? (
//             <Statistics
//               good={countGood}
//               neutral={countNeutral}
//               bad={countBad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
// export default Feedback;
