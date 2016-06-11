import React, { Component } from 'react';
import Radium from 'radium';
import JSONTree from 'react-json-tree';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';

import { styles } from './styles';

@Radium
class FormatJSON extends Component {
  constructor (props) {
    super(props);
    this.state = {
      jsonContent: {},
      showSnack: false,
      errorMessage: ''
    }
  }

  _updateJSON (event, text) {
    try {
      var jsonObj = JSON.parse(text.length ? text : '{}');
      this.setState({
        showSnack: false,
        jsonContent: jsonObj
      });
    } catch (e) {
      this.setState({
        jsonContent: {},
        showSnack: true,
        errorMessage: e.message,
      });
    }
  }

  render () {
    return (
      <div>
        <div style={styles.text}>
          <TextField
            fullWidth         = {true}
            multiLine         = {true}
            rows              = {22}
            hintText          = "JSON Content"
            floatingLabelText = "Please Input JSON Content Here"
            onChange          = {this._updateJSON.bind(this)}
          />
        </div>
        <div style={styles.preview}> 
          <JSONTree data={this.state.jsonContent} shouldExpandNode={() => true}/>
        </div>
        <Snackbar
          open             = {this.state.showSnack}
          message          = {this.state.errorMessage}
          autoHideDuration = {5000}
          onRequestClose   = {this.handleRequestClose}
        />
      </div>
    );
  }
}

export default FormatJSON;
