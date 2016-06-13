import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton';
import { pink400 } from 'material-ui/styles/colors';

import { styles } from './styles';

class Weather extends Component {
  render () {
    return (
      <div className = 'full-height'>
        <TextField
          hintText = 'IP Address'
          floatingLabelText = 'Please input IP adress here'
          floatingLabelStyle = {styles.input}
        />
        <RaisedButton
          backgroundColor = {pink400}
          icon = {<ActionSearch />}
        />
      </div>
    );
  }
}

export default Weather;
