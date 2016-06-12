import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

class LeftNav extends Component {
  render () {
    return (
      <div>
        <List>
          <ListItem
            onClick = {this.props.changeTool.bind(null, 'format-json')}
            primaryText = 'Format JSON'
            leftIcon = {<ContentInbox />}
          />
          <ListItem
            onClick = {this.props.changeTool.bind(null, 'ip-info')}
            primaryText = 'IP Info'
            leftIcon = {<ActionGrade />}
          />
          <ListItem
            onClick = {this.props.changeTool.bind(null, 'weather')}
            primaryText = 'Weather'
            leftIcon = {<ContentSend />}
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
      </div>
    );
  }
}

LeftNav.propTypes = {
  changeTool : React.PropTypes.func.isRequired
};

export default LeftNav;
