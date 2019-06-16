import React from 'react';
import ReactDOM from 'react-dom';

import shortid from 'shortid';

import './index.css';

import App from './components/App';

const posts = [
  {
    id: shortid.generate(),
    author: {
      firstName: 'Dmitry G.',
      lastName: 'Anderson',
    },
    title: 'Laboris ex officia laborum.',
    content: 'Ut cillum do sit elit ipsum esse laboris non do nostrud adipisicing mollit cupidatat minim. Qui ex quis eu duis ullamco. Pariatur cupidatat esse cillum mollit ullamco in.',
    date: new Date(),
  },
  {
    id: shortid.generate(),
    author: {
      firstName: 'Dmitry G.',
      lastName: 'Anderson',
    },
    title: 'Magna adipisicing occaecat.',
    content: 'Duis sunt veniam esse mollit. Consequat fugiat minim sint aliquip. Aute reprehenderit tempor occaecat enim sint eu ad anim culpa quis Lorem nostrud. Velit aliquip do culpa consectetur proident cillum. Anim incididunt anim sint dolor culpa minim culpa excepteur deserunt in adipisicing. Consectetur amet quis qui ullamco qui elit. Consequat cillum incididunt ea deserunt mollit qui aliquip eiusmod quis est.',
    date: new Date(),
  },
  {
    id: shortid.generate(),
    author: {
      firstName: 'Dmitry G.',
      lastName: 'Anderson',
    },
    title: 'Sit ea nulla velit.',
    content: 'Dolore irure sit culpa ex reprehenderit. Enim occaecat fugiat est do aute. Velit ad irure non eiusmod eiusmod tempor nulla reprehenderit eiusmod consectetur velit consectetur. Ullamco culpa veniam do fugiat Lorem qui dolor excepteur ipsum dolor elit ex est. Sint quis cillum laborum occaecat exercitation id cupidatat exercitation.',
    date: new Date(),
  },
];

const users = [
  {
    firstName: 'Dmitry G.',
    lastName: 'Anderson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Id deserunt commodo duis labore et anim aute culpa pariatur incididunt ea qui eiusmod. Aliquip do ex incididunt sunt et duis pariatur. Sit laborum cillum id elit anim do laboris. Velit esse irure laborum labore aute tempor.",
    date: new Date(),
  },
  {
    firstName: 'Erik T.',
    lastName: 'Erikson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Et labore nisi ipsum proident sunt do deserunt fugiat officia. Eiusmod incididunt veniam velit non sint reprehenderit eiusmod officia labore ut. Ullamco deserunt velit adipisicing aliqua enim tempor ad labore. Cillum consequat sunt nostrud reprehenderit adipisicing labore anim ipsum laboris commodo mollit.",
    date: new Date(),
  },
  {
    firstName: 'Truvor M.',
    lastName: 'Udgarson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Laborum enim aliqua Lorem ex commodo labore dolore anim laboris et mollit dolor sunt. Proident laborum commodo deserunt pariatur et sint occaecat tempor. Et laborum veniam occaecat cupidatat voluptate irure mollit dolor est. Reprehenderit dolore dolore labore commodo consectetur incididunt dolor veniam dolor mollit aliquip. Nulla mollit voluptate dolore minim irure labore adipisicing ad ipsum consequat consequat laboris in. Sit amet proident non ea do nostrud esse dolore et enim.",
    date: new Date(),
  },
  {
    firstName: 'Asbjorn D.',
    lastName: 'Hrotgarson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Quis ut tempor ut in magna tempor cupidatat ad cillum. Eu quis deserunt ut officia nostrud nulla elit do culpa nostrud incididunt et elit. Voluptate laboris non tempor velit eiusmod sint veniam et laborum eiusmod elit veniam veniam. Elit sunt culpa laboris incididunt ipsum in magna eu culpa dolor consequat cupidatat.",
    date: new Date(),
  },
  {
    firstName: 'Sigfrodr S.',
    lastName: 'Sigridrson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Consequat mollit elit sit amet sunt eu nostrud cupidatat veniam consectetur. Laborum sunt aliquip excepteur velit ea qui ullamco consequat. Laborum cillum Lorem dolor nulla Lorem nostrud amet minim fugiat elit anim sit. Sint laboris commodo ipsum excepteur nostrud enim. Reprehenderit in sint ipsum et. Laboris culpa velit nostrud id veniam nostrud esse exercitation.",
    date: new Date(),
  },

];

// ====================================

ReactDOM.render(
  <App users={users} posts={posts}/>,
  document.getElementById('root')
);

// ====================================

