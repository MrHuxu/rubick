import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import { pink400 } from 'material-ui/styles/colors';

import { styles } from './styles';

class Weather extends Component {
  render () {
    return (
      <div className = 'full-height'>
        <TextField
          hintText = 'City'
          floatingLabelText = 'Please input address here'
          floatingLabelStyle = {styles.input}
        />
        <IconButton>
          <ActionSearch color = {pink400} />
        </IconButton>
      </div>
    );
  }
}

export default Weather;
