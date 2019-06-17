import React from 'react';

import * as helpers from '../helpers';

function Sidebar(props) {
  const postItems = props.posts.map(post => 
    <li key={post.id}>
      <span className="small">{post.title}</span>
    </li>
  );
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <ul>
        {postItems}
      </ul>
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <div className="status small font-italic font-weight-bold">
        <span>Author: {helpers.formatName(props.author)}</span><br />
        <span>Date: {helpers.formateDate(props.post.date)}</span>
      </div>
      <p>{props.post.content}</p>
    </div>
  );
}

function Blog(props) {
  const posts = props.user.posts.map(post => (
    <Post
      key={post.id}
      id={post.id}
      post={post}
      author={props.user} />)
  );

  return (
    <div className="blog-container">
      <div className="row" >
        <div className="col-8">
          <h2>Posts</h2>
          {posts}
        </div>
        <div className="col-4 order-first">
          <Sidebar posts={props.user.posts}/>
        </div>
      </div>
    </div>
  );
}

export default Blog;
