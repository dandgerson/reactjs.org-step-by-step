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
    const element = <Welcome name={this.formatName(this.props.user)} />
    const names = ['Dmitry', 'Yegor', 'Yaroslav', 'Lada'];

    return (
      <div className="app">
        {this.getGreeting(this.props.user)}

        <Clock />

        {element}
        <Welcome name={this.formatName(this.props.user)} />

        <ul>
          {names.map((name, i) => <li key={i}><Welcome name={name} /></li>)}
        </ul>

        <Comment
          author={this.props.user}
          text={this.props.user.text}
          date={this.props.user.date}
        />
      </div>
    );
  }
}

// function Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formateDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="author-avatar"
      src={props.user.avatarURL}
      alt={props.user.firstName}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.firstName + ' ' + props.user.lastName}
      </div>
    </div>
  );
}

function formateDate(date) {
  return date.toLocaleString('ru');
}
