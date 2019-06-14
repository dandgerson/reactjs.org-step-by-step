import React from 'react';

import Clock from './Clock';

export default class App extends React.Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  getGreeting(user) {
    if (user) {
      return (
        <div className="greetings">
          <h1>Hello, <span className="impressive-text">{this.formatName(user)}</span>!</h1>
          <img className="user-avatar" alt="user avatar" src={user.avatarURL} />
        </div>
      );
    }
    return <h1>Hello, <span className="impressive-text">Stranger</span>!</h1>
  }

  render() {
    return (
      <div className="app">
        {this.getGreeting(this.props.user)}
        <Clock />
      </div>
    );
  }
}
