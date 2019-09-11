import React from 'react';

import * as helpers from '../../../helpers';

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
  return props.isLoggedIn ?
    <UserGreeting user={props.user} /> :
    <GuestGreeting user={props.user} />;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoggedIn: false};
  }

  handleClick = () => this.setState({isLoggedIn: !this.state.isLoggedIn})

  render() {
    return (
      <div className="text-center">
        <Greeting isLoggedIn={this.state.isLoggedIn} user={this.props.user}/>
        <div className="row">
          <div className="col">
            <button
              className="login-button btn btn-outline-secondary"
              type="button"
              onClick={this.handleClick}>
              {this.state.isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginControl;
