import React, { Component } from 'react';
import Radium, { Style } from 'radium';

import { styles } from './styles';

import Menu from '../menu';
import LeftNav from '../left-nav';
import Tools from '../tools';

@Radium
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      toolName: 'format-json'
    };
  }

  _changeTool (name) {
    this.setState({
      toolName: name
    });
  }

  render () {
    return (
      <div>
        <Style rules={styles.common} />
        <Menu />
        <span
          className = 'full-height'
          style = {styles.leftNav}
        >
          <LeftNav />
        </span>
        <span
          className = 'full-height'
          style = {styles.content}
        >
          {Tools[this.state.toolName]}
        </span>
      </div>
    );
  }
}

export default App;