import React from 'react';
import * as helpers from '../helpers';




function Avatar(props) {
  return (
    <img className="author-avatar"
      src={props.author.avatarURL}
      alt={helpers.formatName(props.author)}
    />
  );
}

function AuthorInfo(props) {
  console.log(props);
  return (
    <div className="author-info">
      <Avatar author={props.author} />
      <div className="author-info--name">
        <span className="impressive-text">
          {helpers.formatName(props.author)}
        </span>
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <AuthorInfo author={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {helpers.formateDate(props.date)}
      </div>
    </div>
  );
}

function CommentItem(props) {
  return (
    <li>
      <Comment
          author={props.author}
          text={props.comment.text}
          date={props.comment.date}
        />
    </li>
  );
}

function CommentsList(props) {
  let key = 0;
  const commentsItems = props.users.map(user => {
    return user.comments.map((comment) => {
      return <CommentItem
        key={key++}
        comment={comment}
        author={user} />;
    });
  }).flat();
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


