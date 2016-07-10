import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Menu extends Component {
  static propTypes = {
    themeColor : React.PropTypes.string.isRequired
  };

  render () {
    return (
      <AppBar
        title = 'Rubick'
        style = {{
          backgroundColor : this.props.themeColor
        }}
      />
    );
  }
}

export default Menu;
