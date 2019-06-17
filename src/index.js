import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import './index.scss';

import * as data from './data';

import App from './App';

// ====================================

ReactDOM.render(
  <App users={data.users} posts={data.users.posts}/>,
  document.getElementById('root')
);

// ====================================

