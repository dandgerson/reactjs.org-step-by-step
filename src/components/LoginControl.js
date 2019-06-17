import React from 'react';

import * as helpers from '../helpers';

import NameForm from './NameForm';



function UserGreeting(props) {
  return (
    <div className="row d-flex justify-content-center align-items-center greetings">
      <div className="col-9">
        <h1>Hello, <span className="impressive-text">{helpers.formatName(props.user)}</span>!</h1>
      </div>
      <div className="col-3">
        <img className="avatar rounded-circle" alt="user avatar" src={props.user.avatarURL} />
      </div>
    </div>
  );
}

function GuestGreeting(props) {
  return (
    <div className="row d-flex flex-column justify-content-center align-items-center greetings">
      <div className="col">
        <h1>Hello, <span className="impressive-text">Stranger</span>!</h1>
      </div>
      <div className="col">
        <p className=".small">Please sign up.</p>
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
    const renderLoginButton = () => isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )

    return (
      <div className="text-center">
        <Greeting isLoggedIn={isLoggedIn} user={this.props.user}/>
        {renderLoginButton()}
      </div>
    );
  }
}

export default LoginControl;
