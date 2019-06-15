import React from 'react';

// components
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import Page from './Page'

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
        <span className="impressive-text">{props.user.firstName + ' ' + props.user.lastName}</span>
      </div>
    </div>
  );
}

function formateDate(date) {
  return date.toLocaleString('ru');
}


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showClock: false,
    };
  }

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

  handleClock = (event) => {
    event.target.classList.toggle('pressed');
    this.setState(state => ({
      showClock: !state.showClock,
    }));

  }

  
  render() {
    const element = <Welcome name={this.formatName(this.props.user)} />
    const names = ['Dmitry', 'Yegor', 'Yaroslav', 'Lada'];
    const renderClock = () => {
        if (this.state.showClock) return <Clock />;
      }

    return (
      <div className="app">
        <LoginControl />

        <Toggle
          name="Show Clock"
          isToggleOn={this.state.showClock}
          onClick={this.handleClock}
          renderComponent={renderClock}
        />

        <Page />


        {this.getGreeting(this.props.user)}

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
