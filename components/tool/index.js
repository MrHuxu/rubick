import React, { Component } from 'react';
import FormatJson from './format-json';

class Tool extends Component {
  render () {
    return (
      <div>
        {'format-json' === this.props.name ? <FormatJson /> : null}
      </div>
    );
  }
}

export default Tool;
