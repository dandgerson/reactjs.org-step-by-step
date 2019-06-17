import React from 'react';

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
          <Page />
          <Blog user={this.props.users[0]}/>
          <Comments users={this.props.users} />
        </main>
        <footer className="text-right">
          <span className="small">Powered by Create React App</span>
        </footer>
      </div>
    );
  }
}

export default App;
