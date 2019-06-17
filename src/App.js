import React from 'react';

// components
import LoginControl from './components/LoginControl';
import Clock from './components/Clock';
import Page from './components/Page'
import Blog from './components/Blog';
import Comments from './components/Comments';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <div className="row">
            <div className="col">
              <Clock />
              <LoginControl user={this.props.users[0]}/>
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
          <Comments users={this.props.users} />
        </main>
      </div>
    );
  }
}

export default App;
