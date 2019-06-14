import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

const user = {
  firstName: 'Dmitry G.',
  lastName: 'Anderson',
  avatarURL: './img/portrait.jpg',
};

// ====================================

ReactDOM.render(
  <App user={user} />,
  document.getElementById('root')
);

// ====================================
