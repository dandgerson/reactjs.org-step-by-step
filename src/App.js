import React from 'react';

// components
import LoginControl from './components/LoginControl';
import Clock from './components/Clock';
import Page from './components/Page'
import Blog from './components/Blog';
import CommentsList from './components/CommentsList';

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
          <Blog user={this.props.users[0]}/>
          <CommentsList users={this.props.users} />
        </main>
      </div>
    );
  }
}

export default App;
