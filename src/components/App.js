import React from 'react';

// components
import LoginControl from './LoginControl';
import Clock from './Clock';
import Page from './Page'
import CommentContainer from './CommentContainer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <LoginControl user={this.props.users[0]}/>
          <Clock />
        </header>
        <main>
          <Page />
          <CommentContainer users={this.props.users} />
        </main>
      </div>
    );
  }
}

export default App;
