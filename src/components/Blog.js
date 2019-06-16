import React from 'react';

import * as helpers from '../helpers';

function Post(props) {
  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <span>Date: {helpers.formateDate(props.post.date)}</span>
      <p>{props.post.content}</p>
    </div>
  );
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => 
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map(post => (
      <Post
        key={post.id}
        id={post.id}
        post={post} />
  ));

  return (
    <div className="blog">
      <div className="sidebar">
        <h2>Sidebar</h2>
        {sidebar}
      </div>
      <hr />
      <div>
        <h2>Posts</h2>
        {content}
      </div>
    </div>
  );
}

export default Blog;
