import React from 'react';

// components
import LoginControl from './LoginControl';
import Clock from './Clock';
import Page from './Page'
import CommentsList from './CommentsList';

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
          <CommentsList users={this.props.users} />
        </main>
      </div>
    );
  }
}

export default App;
