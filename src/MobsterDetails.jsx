import React, { Component } from 'react';
import BpkPanel from 'bpk-component-panel';

import STYLES from './MobsterDetails.scss';

const c = className => STYLES[className] || 'UNKNOWN';

export default class MobsterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { mobster: props.mobster };
  }

  render() {
    return (
      <li className={c('MobsterDetails__li')}>
        <BpkPanel>
          {this.state.mobster}
        </BpkPanel>
      </li>
    );
  }
}
