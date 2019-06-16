import React from 'react';

// components
import Clock from './Clock';
import LoginControl from './LoginControl';
import Page from './Page'

// function Component
function Greeting(props) {
  if (props.user) {
    return (
      <div className="greetings">
        <h1>Hello, <span className="impressive-text">{formatName(props.user)}</span>!</h1>
        <img className="user-avatar" alt="user avatar" src={props.user.avatarURL} />
      </div>
    );
  }
  return <h1>Hello, <span className="impressive-text">Stranger</span>!</h1>
}

function Welcome(props) {
  return <Greeting user={props.user} />
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
        <span className="impressive-text">{props.user.firstName + ' ' + props.user.lastName}</span>
      </div>
    </div>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function formateDate(date) {
  return date.toLocaleString('ru');
}


class App extends React.Component {
  

  render() {
    return (
      <div className="app">
        <LoginControl />
        <Clock />
        <Page />

        <Welcome user={this.props.user} />

        <Comment
          author={this.props.user}
          text={this.props.user.text}
          date={this.props.user.date}
        />
      </div>
    );
  }
}

export default App;
