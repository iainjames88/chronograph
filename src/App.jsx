import React, { Component } from 'react';
import BpkInput from 'bpk-component-input';
import MobstersList from './MobstersList';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeMobsterInput = this.onChangeMobsterInput.bind(this);
    this.onKeyPressMobsterInput = this.onKeyPressMobsterInput.bind(this);
    this.addMobster = this.addMobster.bind(this);

    this.state = {
      mobsters: [],
      mobsterInputValue: '',
    };
  }

  onChangeMobsterInput(event) {
    this.setState({ mobsterInputValue: event.target.value });
  }

  onKeyPressMobsterInput(event) {
    if (event.key === 'Enter' && this.state.mobsterInputValue !== '') {
      this.addMobster(this.state.mobsterInputValue);
    }
  }

  addMobster(mobster) {
    const mobsters = this.state.mobsters;
    mobsters.push(mobster);
    this.setState({ mobsters, mobsterInputValue: '' });
  }


  render() {
    return (
      <div className={c('App')}>
        <main className={c('App__main')}>
          <BpkInput
            id="MobsterInput"
            name="MobsterInput"
            placeholder="Enter a (unique) name and press 'Enter'"
            value={this.state.mobsterInputValue}
            onChange={this.onChangeMobsterInput}
            onKeyPress={this.onKeyPressMobsterInput}
          />
          <MobstersList mobsters={this.state.mobsters} />
        </main>
      </div>
    );
  }
}
