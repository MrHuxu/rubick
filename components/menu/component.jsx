import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

@Radium
class Menu extends Component {
  render () {
    return (
      <AppBar
        title = 'Rubick'
      />
    );
  }
}

export default Menu;
