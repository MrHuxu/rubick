import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Menu extends Component {
  render () {
    return (
      <AppBar
        title = 'Rubick'
        iconClassNameRight = 'muidocs-icon-navigation-expand-more'
      />
    );
  }
}

export default Menu;
