import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './components/App';

const users = [
  {
    firstName: 'Dmitry G.',
    lastName: 'Anderson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date(),
  },
  {
    firstName: 'Erik T.',
    lastName: 'Erikson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date(),
  },
  {
    firstName: 'Truvor M.',
    lastName: 'Udgarson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date(),
  },
  {
    firstName: 'Asbjorn D.',
    lastName: 'Hrotgarson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date(),
  },
  {
    firstName: 'Sigfrodr S.',
    lastName: 'Sigridrson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    date: new Date(),
  },

];

// ====================================

ReactDOM.render(
  <App users={users} />,
  document.getElementById('root')
);

// ====================================

