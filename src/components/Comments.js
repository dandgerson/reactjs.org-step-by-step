import React from 'react';
import * as helpers from '../helpers';

function Avatar(props) {
  return (
    <img className="avatar rounded-circle"
      src={props.author.avatarURL}
      alt={helpers.formatName(props.author)}
    />
  );
}

function AuthorInfo(props) {
  return (
    <div className="author-info-container d-flex flex-column justify-content-center align-items-center">
      <Avatar author={props.author} />
      <div className="font-italic font-weight-bold small text-center">
          {helpers.formatName(props.author)}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="row">
      <div className="col-3">
        <AuthorInfo author={props.author}/>
      </div>
      <div className="col-7">
        <p>{props.text}</p>
      </div>
      <div className="col-2">
        <span className="font-italic small">{helpers.formateDate(props.date)}</span>
      </div>
    </div>
  );
}

function Comments(props) {
  let key = 0;
  const comments = props.users.map(user => {
    return user.comments.map((comment) => {
      return <Comment
        key={key++}
        author={user}
        text={comment.text}
        date={comment.date} />;
    });
  }).flat();

  return (
    <div className="comments-container">
      <div className="row">
        <div className="col text-center">
          <h2>Comments</h2>
        </div>
      </div>
      {comments}
    </div>
  );
}

export default Comments;


