import $ from 'jquery';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { orange400 } from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { Card, CardText } from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';

import { styles } from './styles';

class ProcessManager extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showSnack    : false,
      errorMessage : null,
      status       : false,
      ip           : null,
      address      : null,
      point        : {
        longitude : null,
        latitude  : null
      }
    };
  }

  componentDidMount () {
    this._fetchAddressInfo();
  }

  _refreshMap (long, lat) {
    /* eslint-disable */
    var map = new BMap.Map('allmap');
    map.centerAndZoom(new BMap.Point(long, lat), 14);
    var local = new BMap.LocalSearch(map, {
    /* eslint-enable */
      renderOptions : {
        map          : map,
        autoViewport : true
      }
    });
    local.search('井格火锅');
  }

  _fetchAddressInfo (ip) {
    var url = `http://api.map.baidu.com/location/ip?ak=7E34039cd9a903ed6209f42e6e797e7e${ip ? '&ip=' + ip : ''}&coor=bd09ll`;
    var getLocalIP =  new Promise((resolve, reject) => {
      $.getJSON('http://ProcessManager.io/', (data) => {
        resolve(data.ip);
      });
    });

    (ip ? Promise.resolve(ip) : getLocalIP).then((ip) => {
      $.ajax({
        url      : url,
        type     : 'GET',
        dataType : 'jsonp'
      }).done((data, status, xhr) => {
        if (data.status) {
          this._showErrorMessage(data.message);
        } else {
          this.setState({
            showSnack : false,
            status    : true,
            ip        : ip,
            address   : data.content.address,
            point     : {
              longitude : data.content.point.x,
              latitude  : data.content.point.y
            }
          });
          this._refreshMap(data.content.point.x, data.content.point.y);
        }
      });
    });
  }

  _showErrorMessage (text) {
    this.setState({
      showSnack    : true,
      errorMessage : text
    });
  }

  _validateIp (text) {
    var toNum = (str) => str.length > 0 ? Number(str) : undefined;
    var valid = (num) => num >= 0 && num <= 255;
    var nums = text.split('.').map(toNum);
    return 4 === nums.length && 4 === nums.filter(valid).length;
  }

  _updateIp (event, text) {
    if (text.length) {
      this._validateIp(text) ? this._fetchAddressInfo(text) : this._showErrorMessage('Invalid IP address');
    } else {
      this._fetchAddressInfo();
    }
  }

  render () {
    return (
      <div className = 'full-height'>
        <div>
          <TextField
            hintText = 'IP Address'
            floatingLabelText = 'Please input IP adress here'
            floatingLabelStyle = {styles.input}
            onChange = {this._updateIp.bind(this)}
          />
        </div>

        {
          this.state.status ? (
            <div style = {{
              verticalalign : 'top'
            }}>
              <div style = {styles.point}>
                <Card>
                  <CardText>
                    <List>
                      {this.state.ip ? <ListItem> IP: {this.state.ip}</ListItem> : null}
                      <ListItem> Address: {this.state.address}</ListItem>
                      <Divider />
                      <ListItem> Longitude: {this.state.point.longitude}</ListItem>
                      <ListItem> Latitude: {this.state.point.latitude}</ListItem>
                    </List>
                  </CardText>
                </Card>
              </div>
              <Card style = {styles.mapContainer}>
                <CardText>
                  <div
                    id = 'allmap'
                    style = {styles.map} />
                </CardText>
              </Card>
            </div>
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
        <Snackbar
          open = {this.state.showSnack}
          message = {this.state.errorMessage}
          autoHideDuration = {4000}
          onRequestClose = {this.handleRequestClose}
        />
      </div>
    );
  }
}

export default ProcessManager;
