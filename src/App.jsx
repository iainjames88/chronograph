import React, { Component } from 'react';
import BpkInput from 'bpk-component-input';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';

import MobstersList from './MobstersList';
import Stopwatch from './Stopwatch';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeMobsterInput = this.onChangeMobsterInput.bind(this);
    this.onKeyPressMobsterInput = this.onKeyPressMobsterInput.bind(this);
    this.addMobster = this.addMobster.bind(this);
    this.onClickDeleteMobster = this.onClickDeleteMobster.bind(this);
    this.onClickPromoteToDriver = this.onClickPromoteToDriver.bind(this);
    this.onTimerExpire = this.onTimerExpire.bind(this);

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

  onClickDeleteMobster(name) {
    this.setState({ mobsters: this.state.mobsters.filter(m => m.name !== name) });
  }

  onClickPromoteToDriver(name) {
    const mobsters = [...this.state.mobsters];
    const prevDriver = mobsters.find(m => m.isDriver);
    const newDriver = mobsters.find(m => m.name === name);

    prevDriver.isDriver = false;
    newDriver.isDriver = true;

    mobsters.splice(mobsters.indexOf(prevDriver), 1);
    mobsters.splice(mobsters.indexOf(newDriver), 1);
    mobsters.splice(0, 0, newDriver);
    mobsters.push(prevDriver);

    this.setState({ mobsters });
  }

  addMobster(name) {
    const mobsters = [...this.state.mobsters];
    const mobstersNames = mobsters.map(m => m.name).join('|');
    const regexp = new RegExp(`^(${mobstersNames})$`, 'i');

    if (regexp.test(name)) {
      alert('They are already in the mob!');
    } else {
      mobsters.push({ name, isDriver: mobsters.length === 0 });
      this.setState({ mobsters, mobsterInputValue: '' });
    }
  }

  onTimerExpire() {
    const mobsters = [...this.state.mobsters];
    mobsters.push({...mobsters.shift(), isDriver: false});
    mobsters[0].isDriver = true;
    this.setState({ mobsters });
  }

  render() {
    return (
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={4}>
              <BpkInput
                id="MobsterInput"
                name="MobsterInput"
                placeholder="Enter a (unique) name and press 'Enter'"
                value={this.state.mobsterInputValue}
                onChange={this.onChangeMobsterInput}
                onKeyPress={this.onKeyPressMobsterInput}
              />
              <MobstersList
                mobsters={this.state.mobsters}
                onClickPromoteToDriver={this.onClickPromoteToDriver}
                onClickDeleteMobster={this.onClickDeleteMobster}
              />
          </BpkGridColumn>
          <BpkGridColumn width={8}>
            <Stopwatch
              minutes={10}
              onTimerExpire={this.onTimerExpire}
            />
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}
