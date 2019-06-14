import React from 'react';

export default class App extends React.Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  getGreeting(user) {
    if (user) {
      return (
        <div>
          <h1>Hello, <span className="impressive-text">{this.formatName(user)}</span>!</h1>
          <img alt="user avatar" src={user.avatarURL}></img>
        </div>
      );
    }
    return <h1>Hello, <span className="impressive-text">Stranger</span>!</h1>
  }

  render() {
    return this.getGreeting(this.props.user);
  }
}
