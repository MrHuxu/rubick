import $ from 'jquery';
import React, { Component } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import { styles } from './styles';

class Weather extends Component {
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

  render () {
    return (
      <div className = 'full-height'>
        {
          this.state.status ? (
            <p>{JSON.stringify(this.state)}</p>
          ) : (
            <RefreshIndicator
              size = {50}
              left = {70}
              top = {0}
              loadingColor = {"#FF9800"}
              status = 'loading'
              style = {styles.refresh}
            />
          )
        }
      </div>
    );
  }
}

export default Weather;
