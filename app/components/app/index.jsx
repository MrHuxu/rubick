import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { cyan400, orange400, pink400 } from 'material-ui/styles/colors';

import { styles } from './styles';

import Menu from '../menu';
import LeftNav from '../left-nav';
import Tool from '../tool';

@Radium
class App extends Component {
  static mapToolToColor = {
    'format-json' : cyan400,
    'process-manager'     : orange400,
    'weather'     : pink400
  };

  constructor (props) {
    super(props);
    this.state = {
      toolName : 'format-json'
    };
  }

  _changeTool (name) {
    this.setState({
      toolName : name
    });
  }

  render () {
    return (
      <div className = 'full-height'>
        <Style rules = {styles.common} />
        <Menu themeColor = {this.constructor.mapToolToColor[this.state.toolName]} />
        <div
          className = 'full-height'
          style = {styles.leftNav}
        >
          <LeftNav
            toolName = {this.state.toolName}
            changeTool = {this._changeTool.bind(this)}
          />
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
