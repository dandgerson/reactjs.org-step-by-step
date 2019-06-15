import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import avatarURL from './img/portrait.jpg';

import App from './components/App';

const user = {
  firstName: 'Dmitry G.',
  lastName: 'Anderson',
  avatarURL: avatarURL,
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  date: new Date(),
};

// ====================================

ReactDOM.render(
  <App user={user} />,
  document.getElementById('root')
);

// ====================================

