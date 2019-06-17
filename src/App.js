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
          <div className="row justify-content-center">
            <div className="col">
              <LoginControl user={this.props.users[0]}/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Clock />
            </div>
          </div>
        </header>
        <main>
          <div className="row">
            <div className="col">
              <Page />
            </div>
          </div>
          <Blog user={this.props.users[0]}/>
          <CommentsList users={this.props.users} />
        </main>
      </div>
    );
  }
}

export default App;
