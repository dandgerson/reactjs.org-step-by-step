import React from 'react';

import * as helpers from '../helpers';

function Post(props) {
  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <div className="post-status">
        <span>Author: {helpers.formatName(props.author)}</span><br />
        <span>Date: {helpers.formateDate(props.post.date)}</span>
      </div>
      <p>{props.post.content}</p>
    </div>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.user.posts.map(post => 
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  return (
    <div className="blog">
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          {sidebar}
        </ul>
      </div>
      <hr />
      <div>
        <h2>Posts</h2>
        {props.user.posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            post={post}
            author={props.user} />)
        )}
      </div>
    </div>
  );
}

export default Blog;
