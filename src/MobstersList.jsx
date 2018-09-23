import React, { Component } from 'react';
import MobsterDetails from './MobsterDetails';

export default class MobstersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobsters: props.mobsters,
    };
  }

  render() {
    return this.state.mobsters.map(mobster => <MobsterDetails key={mobster} mobster={mobster} />);
  }
}
