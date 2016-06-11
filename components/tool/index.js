import React, { Component } from 'react';

import FormatJson from './format-json';
import Weather from './weather';

class Tool extends Component {
  render () {
    return (
      <div>
        {'format-json' === this.props.name ? <FormatJson /> : null}
        {'weather' === this.props.name ? <Weather /> : null}
      </div>
    );
  }
}

Tool.propTypes = {
  name : React.PropTypes.string.isRequired
};

export default Tool;
