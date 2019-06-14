import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import avatarURL from './img/portrait.jpg';

import App from './App';

const user = {
  firstName: 'Dmitry G.',
  lastName: 'Anderson',
  avatarURL: avatarURL,
};

// ====================================

setInterval(() => ReactDOM.render(
  <App user={user} />,
  document.getElementById('root')), 1000);

// ====================================

