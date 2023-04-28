import React, { Component } from 'react';
import { Button } from './Button/Button';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handelClick = e => {
    console.log(e);
    this.setState();
  };
  render() {
    const btns = Object.keys(this.state);
    return (
      <div>
        <Button btns={btns} handelClick={this.handelClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.good}
          positivePercentage={this.state.good}
        />
      </div>
    );
  }
}

export default App;
