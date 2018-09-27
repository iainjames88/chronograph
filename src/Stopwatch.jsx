import React, { Component } from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import PlusIconSm from 'bpk-component-icon/sm/plus';
import MinusIconSm from 'bpk-component-icon/sm/minus';
import { withButtonAlignment } from 'bpk-component-icon';

import STYLES from './Stopwatch.scss';
const c = className => STYLES[className] || 'UNKNOWN';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.getTime = this.getTime.bind(this);
    this.onClickToggleTimer = this.onClickToggleTimer.bind(this);
    this.onClickResetTimer = this.onClickResetTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.onTimerExpire = props.onTimerExpire;

    const date = new Date(1970, 0, 1, 0, 0, 0);
    date.setMinutes(props.minutes);

    this.state = {
      date,
      rotationLength: 0,
      isRunning: false,
      interval: null,
    };
  }

  onClickToggleTimer() {
    if (this.state.interval === null) {
      const rotationLength = this.state.date.getTime();
      this.setState({ rotationLength });
    }

    if (!this.state.isRunning) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  onClickResetTimer() {
    clearInterval(this.state.interval);

    this.setState({
      date: new Date(this.state.rotationLength),
      isRunning: false,
    });
  }

  getTime() {
    return this.state.date.toISOString().substr(14, 5);
  }

  startTimer() {
    this.setState({ isRunning: true });

    const interval = setInterval(() => {
      const date = new Date(this.state.date.getTime() - 1000);
      this.setState({ date });

      if (this.state.date.getTime() === -3600000) {
        clearInterval(this.state.interval);
        this.onTimerExpire();
      }
    }, 1000);

    this.setState({ interval });
  }

  pauseTimer() {
    this.setState({ isRunning: false });
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className={c('Stopwatch__container')}>
        <div className={c('Stopwatch__timerRow')}>
          <h1 className={c('Stopwatch__h1')}>{this.getTime()}</h1>
        </div>
        <div className={c('Stopwatch__buttonsRow')}>
          <BpkButton
            onClick={this.onClickToggleTimer}
            className={c('Stopwatch__button')}
          >
            {this.state.isRunning ? 'Pause' : 'Start'}
          </BpkButton>
          <BpkButton
            onClick={this.onClickResetTimer}
            secondary
            className={c('Stopwatch__button')}
          >
            Reset
          </BpkButton>
        </div>
      </div>
    );
  }
}
