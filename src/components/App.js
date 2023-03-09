import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (event) => {
    this.setState((prevState) => {
      return {
        [event.target.id]: prevState[event.target.id] + 1
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, num) => {
      return total + num;
    });
  };
  countPositiveFeedbackPercentage = () => {
    const totalGood = this.state.good;
    const totalfeedback = Object.values(this.state).reduce((total, num) => {
      return total + num;
    });
    if (totalfeedback === 0) {
      return 0;
    }
    return ((totalGood / totalfeedback) * 100).toFixed(0);
  };

  render() {
    return (
      <Section title="Please leave feedback" className="App">
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        {Object.values(this.state).some((value) => value > 0) ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
export default App;
