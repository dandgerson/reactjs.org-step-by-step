import React from 'react';

import * as helpers from '../helpers';

import NameForm from './NameForm';



function UserGreeting(props) {
  return (
    <div className="greetings">
      <h1>Hello, <span className="impressive-text">{helpers.formatName(props.user)}</span>!</h1>
      <img className="user-avatar" alt="user avatar" src={props.user.avatarURL} />
    </div>
  );
}

function GuestGreeting(props) {
  return (
    <div className="greetings">
      <div>
        <h1>Hello, <span className="impressive-text">Stranger</span>!</h1>
        <p>Please sign up.</p>
        <NameForm />
      </div>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting user={props.user} />;
  }
  return <GuestGreeting user={props.user} />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="pressed" onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {isLoggedIn: false};
  }

  handleLoginClick(e) {
    this.setState({isLoggedIn: true});
  }
  
  handleLogoutClick(e) {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} user={this.props.user}/>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

export default LoginControl;
