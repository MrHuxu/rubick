import React, { Component } from 'react';

import FormatJson from './format-json';
import ProcessManager from './process-manager';
import Weather from './weather';

class Tool extends Component {
  render () {
    return (
      <div className = 'full-height'>
        {'format-json' === this.props.name ? <FormatJson /> : null}
        {'process-manager' === this.props.name ? <ProcessManager /> : null}
        {'weather' === this.props.name ? <Weather /> : null}
      </div>
    );
  }
}

Tool.propTypes = {
  name : React.PropTypes.string.isRequired
};

export default Tool;
