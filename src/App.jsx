import React, { Component } from 'react';
import BpkInput from 'bpk-component-input';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';

import MobstersList from './MobstersList';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeMobsterInput = this.onChangeMobsterInput.bind(this);
    this.onKeyPressMobsterInput = this.onKeyPressMobsterInput.bind(this);
    this.addMobster = this.addMobster.bind(this);
    this.onClickDeleteMobster = this.onClickDeleteMobster.bind(this);
    this.onClickPromoteToDriver = this.onClickPromoteToDriver.bind(this);

    this.state = {
      mobsters: [
        { name: 'Jack', isDriver: true },
        { name: 'Victor', isDriver: false },
        { name: 'Winston', isDriver: false },
        { name: 'Tam', isDriver: false },
      ],
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
    mobsters.push({ name, isDriver: false });
    this.setState({ mobsters, mobsterInputValue: '' });
  }

  render() {
    return (
      <BpkGridContainer>
        <BpkGridRow>
          <BpkGridColumn width={4}>
            <div className={c('App')}>
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
            </div>
          </BpkGridColumn>
        </BpkGridRow>
      </BpkGridContainer>
    );
  }
}
