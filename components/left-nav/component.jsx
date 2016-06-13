import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

import { styles } from './styles';

class LeftNav extends Component {
  static propTypes = {
    changeTool : React.PropTypes.func.isRequired,
    toolName   : React.PropTypes.string.isRequired
  };

  render () {
    return (
      <List>
        <ListItem
          onClick = {this.props.changeTool.bind(null, 'format-json')}
          primaryText = 'Format JSON'
          leftIcon = {<ContentInbox />}
          style = {Object.assign(
            {},
            styles['format-json'],
            'format-json' === this.props.toolName ? styles.selected : styles.common
          )}
        />
        <ListItem
          onClick = {this.props.changeTool.bind(null, 'ip-info')}
          primaryText = 'IP Info'
          leftIcon = {<ActionGrade />}
          style = {Object.assign(
            {},
            styles['ip-info'],
            'ip-info' === this.props.toolName ? styles.selected : styles.common
          )}
        />
        <ListItem
          onClick = {this.props.changeTool.bind(null, 'weather')}
          primaryText = 'Weather'
          leftIcon = {<ContentSend />}
          style = {Object.assign(
            {},
            styles['weather'],
            'weather' === this.props.toolName ? styles.selected : styles.common
          )}
        />
        <ListItem
          primaryText = 'Drafts'
          leftIcon = {<ContentDrafts />}
        />
        <ListItem
          primaryText = 'Inbox'
          leftIcon = {<ContentInbox />}
        />
      </List>
    );
  }
}

export default LeftNav;
