import React from 'react';

import shortid from 'shortid';

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

function CommentsList(props) {
  const commentsItems = props.users.map((user, index) => {
    return (
      <li key={shortid.generate()} >
        <Comment
          author={user}
          text={user.text}
          date={user.date}
        />
      </li>
    );
  });
  return (
    <div>
      <h2>Comments List</h2>
      <ul className="comments-list">
        {commentsItems}
      </ul>
    </div>
  );
}

export default CommentsList;

// helpers

function formateDate(date) {
  return date.toLocaleString('ru');
}
