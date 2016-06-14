import $ from 'jquery';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { orange400 } from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Card, CardText } from 'material-ui/Card';

import { styles } from './styles';

class IpInfo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status  : false,
      ip      : null,
      address : null,
      point   : {
        longitude : null,
        latitude  : null
      }
    };
  }

  componentDidMount () {
    this._fetchAddressInfo();
  }

  _fetchAddressInfo (ip) {
    $.ajax({
      url      : 'http://api.map.baidu.com/location/ip?ak=7E34039cd9a903ed6209f42e6e797e7e&ip=202.198.16.3&coor=bd09ll',
      type     : 'GET',
      dataType : 'jsonp'
    }).done((data, status, xhr) => {
      console.log(data);
      this.setState({
        status  : true,
        ip      : null,
        address : data.content.address,
        point   : {
          longitude : data.content.point.x,
          latitude  : data.content.point.y
        }
      });
    });
  }

  _updateIp (event, text) {

  }

  render () {
    return (
      <div className = 'full-height'>
        <TextField
          hintText = 'IP Address'
          floatingLabelText = 'Please input IP adress here'
          floatingLabelStyle = {styles.input}
          onChange = {this._updateIp.bind(this)}
        />
        <IconButton>
          <ActionSearch color = {orange400} />
        </IconButton>
        <div>
        {
          this.state.status ? (
            <Card style = {styles.point}>
              <CardText>
                <List>
                  <ListItem> IP: {this.state.ip}</ListItem>
                  <ListItem> Address: {this.state.address}</ListItem>
                  <Divider />
                  <ListItem> Longitude: {this.state.point.longitude}</ListItem>
                  <ListItem> Latitude: {this.state.point.latitude}</ListItem>
                </List>
              </CardText>
            </Card>
          ) : (
            <RefreshIndicator
              size = {50}
              left = {70}
              top = {0}
              loadingColor = {orange400}
              status = 'loading'
              style = {styles.refresh}
            />
          )
        }
        </div>
      </div>
    );
  }
}

export default IpInfo;
