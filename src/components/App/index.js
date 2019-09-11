import React from 'react';

import LoginControl from './LoginControl';
import Clock from './Clock';
import Calculator from './Calculator'
import Page from './Page'
import Blog from './Blog';
import Comments from './Comments';

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
          <Calculator />
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
