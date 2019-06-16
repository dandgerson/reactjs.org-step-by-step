import React from 'react';

// components
import Clock from './Clock';
import LoginControl from './LoginControl';
import Page from './Page'
import CommentContainer from './CommentContainer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <LoginControl user={this.props.users[0]}/>
        <Clock />
        <Page />
        <CommentContainer users={this.props.users} />
      </div>
    );
  }
}

export default App;
