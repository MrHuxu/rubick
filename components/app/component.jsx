import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { styles } from './styles';

import Menu from '../menu';
import LeftNav from '../left-nav';
import Tool from '../tool';

@Radium
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      toolName : 'weather'
    };
  }

  render () {
    return (
      <div className = 'full-height'>
        <Style rules = {styles.common} />
        <Menu />
        <div
          className = 'full-height'
          style = {styles.leftNav}
        >
          <LeftNav />
        </div>
        <div
          className = 'full-height'
          style = {styles.content}
        >
          <Tool name = {this.state.toolName} />
        </div>
      </div>
    );
  }
}

export default App;
