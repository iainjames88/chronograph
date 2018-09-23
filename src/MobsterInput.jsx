import React, { Component } from 'react';
import BpkInput from 'bpk-component-input';

export default class MobsterInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = { text: '' };
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <BpkInput
        id="MobsterInput"
        name="MobsterInput"
        value={this.state.text}
        onChange={this.onChange}
        onKeyPress={this.props.onKeyPress}
      />
    );
  }
}
