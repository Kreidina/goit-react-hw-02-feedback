import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const option = e.currentTarget.textContent;
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () => {
    let totalValue = 0;
    const { good, neutral, bad } = this.state;
    totalValue += good + neutral + bad;
    return totalValue;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    const { good } = this.state;
    const total = this.countTotalFeedback();
    positiveFeedback += (good / total) * 100;
    return positiveFeedback.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btn = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={btn} onLeaveFeedback={this.handleClick} />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={
              positiveFeedback === 'NaN' ? 0 : positiveFeedback
            }
          />
        </Section>
      </div>
    );
  }
}

export default App;
