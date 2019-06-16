import React from 'react';

// components
import LoginControl from './LoginControl';
import Clock from './Clock';
import Page from './Page'
import Blog from './Blog';
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
          <Blog posts={this.props.posts}/>
          <CommentsList users={this.props.users} />
        </main>
      </div>
    );
  }
}

export default App;
