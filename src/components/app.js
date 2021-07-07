import React, { Component } from 'react';
import moment from 'moment';
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Starter</h1>
        <div>
            <h1>Aiden Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        </div>
      </div>
    );
  }
}
