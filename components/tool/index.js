import React, { Component } from 'react';

import FormatJson from './format-json';
import IpInfo from './ip-info';

class Tool extends Component {
  render () {
    return (
      <div className = 'full-height'>
        {'format-json' === this.props.name ? <FormatJson /> : null}
        {'ip-info' === this.props.name ? <IpInfo /> : null}
      </div>
    );
  }
}

Tool.propTypes = {
  name : React.PropTypes.string.isRequired
};

export default Tool;
