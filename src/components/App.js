import React from 'react';

// components
import Clock from './Clock';
import LoginControl from './LoginControl';
import Page from './Page'

// function Component


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formateDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="author-avatar"
      src={props.user.avatarURL}
      alt={props.user.firstName}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        <span className="impressive-text">{props.user.firstName + ' ' + props.user.lastName}</span>
      </div>
    </div>
  );
}

function formateDate(date) {
  return date.toLocaleString('ru');
}


class App extends React.Component {
  

  render() {

    const comments = this.props.users.map((user, index) => {
      return <Comment
        key={index}
        author={user}
        text={user.text}
        date={user.date}
      />
    })

    return (
      <div className="app">
        <LoginControl user={this.props.users[0]}/>
        <Clock />
        <Page />

        <div className="comments-container">
          {comments}
        </div>
      </div>
    );
  }
}

export default App;
