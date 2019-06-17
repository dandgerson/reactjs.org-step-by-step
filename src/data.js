import fs from 'fs';

import shortid from 'shortid';

export const users = [
  {
    firstName: 'Dmitry G.',
    lastName: 'Anderson',
    avatarURL: 'https://placebear.com/g/400/400',
    posts: [
      {
        id: shortid.generate(),
        title: 'Laboris ex officia laborum.',
        content: 'Ut cillum do sit elit ipsum esse laboris non do nostrud adipisicing mollit cupidatat minim. Qui ex quis eu duis ullamco. Pariatur cupidatat esse cillum mollit ullamco in.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Magna adipisicing occaecat.',
        content: 'Duis sunt veniam esse mollit. Consequat fugiat minim sint aliquip. Aute reprehenderit tempor occaecat enim sint eu ad anim culpa quis Lorem nostrud. Velit aliquip do culpa consectetur proident cillum. Anim incididunt anim sint dolor culpa minim culpa excepteur deserunt in adipisicing. Consectetur amet quis qui ullamco qui elit. Consequat cillum incididunt ea deserunt mollit qui aliquip eiusmod quis est.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Sit ea nulla velit.',
        content: 'Dolore irure sit culpa ex reprehenderit. Enim occaecat fugiat est do aute. Velit ad irure non eiusmod eiusmod tempor nulla reprehenderit eiusmod consectetur velit consectetur. Ullamco culpa veniam do fugiat Lorem qui dolor excepteur ipsum dolor elit ex est. Sint quis cillum laborum occaecat exercitation id cupidatat exercitation.',
        date: new Date(),
      },
    ],
    comments: [
      {
        text: "Id deserunt commodo duis labore et anim aute culpa pariatur incididunt ea qui eiusmod. Aliquip do ex incididunt sunt et duis pariatur. Sit laborum cillum id elit anim do laboris. Velit esse irure laborum labore aute tempor.",
        date: new Date(),
      },
    ],
  },
  {
    firstName: 'Erik T.',
    lastName: 'Erikson',
    avatarURL: 'https://placebear.com/g/400/400',
    posts: [
      {
        id: shortid.generate(),
        title: 'Esse anim eu id.',
        content: 'Eu et ipsum sit anim sunt officia qui cupidatat quis exercitation duis. Elit cillum Lorem quis sit enim ullamco laboris. Mollit qui Lorem sint ipsum enim et quis fugiat consectetur incididunt reprehenderit officia. Proident fugiat proident elit laborum ipsum eu id cupidatat. Irure deserunt incididunt consectetur dolore Lorem pariatur ex anim veniam. Ut incididunt reprehenderit consequat cillum et excepteur deserunt elit amet.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Ullamco cupidatat sint duis.',
        content: 'Duis sunt veniam esse mollit. Consequat fugiat minim sint aliquip. Aute reprehenderit tempor occaecat enim sint eu ad anim culpa quis Lorem nostrud. Velit aliquip do culpa consectetur proident cillum. Anim incididunt anim sint dolor culpa minim culpa excepteur deserunt in adipisicing. Consectetur amet quis qui ullamco qui elit. Consequat cillum incididunt ea deserunt mollit qui aliquip eiusmod quis est.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Sit ea nulla velit.',
        content: 'Dolore irure sit culpa ex reprehenderit. Enim occaecat fugiat est do aute. Velit ad irure non eiusmod eiusmod tempor nulla reprehenderit eiusmod consectetur velit consectetur. Ullamco culpa veniam do fugiat Lorem qui dolor excepteur ipsum dolor elit ex est. Sint quis cillum laborum occaecat exercitation id cupidatat exercitation.',
        date: new Date(),
      },
    ],
    comments: [
      {
        text: "Id deserunt commodo duis labore et anim aute culpa pariatur incididunt ea qui eiusmod. Aliquip do ex incididunt sunt et duis pariatur. Sit laborum cillum id elit anim do laboris. Velit esse irure laborum labore aute tempor.",
        date: new Date(),
      },
    ],
  },
  {
    firstName: 'Truvor M.',
    lastName: 'Udgarson',
    avatarURL: 'https://placebear.com/g/400/400',
    posts: [
      {
        id: shortid.generate(),
        title: 'Esse anim eu id.',
        content: 'Eu et ipsum sit anim sunt officia qui cupidatat quis exercitation duis. Elit cillum Lorem quis sit enim ullamco laboris. Mollit qui Lorem sint ipsum enim et quis fugiat consectetur incididunt reprehenderit officia. Proident fugiat proident elit laborum ipsum eu id cupidatat. Irure deserunt incididunt consectetur dolore Lorem pariatur ex anim veniam. Ut incididunt reprehenderit consequat cillum et excepteur deserunt elit amet.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Ullamco cupidatat sint duis.',
        content: 'Duis sunt veniam esse mollit. Consequat fugiat minim sint aliquip. Aute reprehenderit tempor occaecat enim sint eu ad anim culpa quis Lorem nostrud. Velit aliquip do culpa consectetur proident cillum. Anim incididunt anim sint dolor culpa minim culpa excepteur deserunt in adipisicing. Consectetur amet quis qui ullamco qui elit. Consequat cillum incididunt ea deserunt mollit qui aliquip eiusmod quis est.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Sit ea nulla velit.',
        content: 'Dolore irure sit culpa ex reprehenderit. Enim occaecat fugiat est do aute. Velit ad irure non eiusmod eiusmod tempor nulla reprehenderit eiusmod consectetur velit consectetur. Ullamco culpa veniam do fugiat Lorem qui dolor excepteur ipsum dolor elit ex est. Sint quis cillum laborum occaecat exercitation id cupidatat exercitation.',
        date: new Date(),
      },
    ],
    comments: [
      {
        text: "Id deserunt commodo duis labore et anim aute culpa pariatur incididunt ea qui eiusmod. Aliquip do ex incididunt sunt et duis pariatur. Sit laborum cillum id elit anim do laboris. Velit esse irure laborum labore aute tempor.",
        date: new Date(),
      },
    ],
  },
  {
    firstName: 'Asbjorn D.',
    lastName: 'Hrotgarson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Quis ut tempor ut in magna tempor cupidatat ad cillum. Eu quis deserunt ut officia nostrud nulla elit do culpa nostrud incididunt et elit. Voluptate laboris non tempor velit eiusmod sint veniam et laborum eiusmod elit veniam veniam. Elit sunt culpa laboris incididunt ipsum in magna eu culpa dolor consequat cupidatat.",
    date: new Date(),
    posts: [
      {
        id: shortid.generate(),
        title: 'Esse anim eu id.',
        content: 'Eu et ipsum sit anim sunt officia qui cupidatat quis exercitation duis. Elit cillum Lorem quis sit enim ullamco laboris. Mollit qui Lorem sint ipsum enim et quis fugiat consectetur incididunt reprehenderit officia. Proident fugiat proident elit laborum ipsum eu id cupidatat. Irure deserunt incididunt consectetur dolore Lorem pariatur ex anim veniam. Ut incididunt reprehenderit consequat cillum et excepteur deserunt elit amet.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Ullamco cupidatat sint duis.',
        content: 'Duis sunt veniam esse mollit. Consequat fugiat minim sint aliquip. Aute reprehenderit tempor occaecat enim sint eu ad anim culpa quis Lorem nostrud. Velit aliquip do culpa consectetur proident cillum. Anim incididunt anim sint dolor culpa minim culpa excepteur deserunt in adipisicing. Consectetur amet quis qui ullamco qui elit. Consequat cillum incididunt ea deserunt mollit qui aliquip eiusmod quis est.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Sit ea nulla velit.',
        content: 'Dolore irure sit culpa ex reprehenderit. Enim occaecat fugiat est do aute. Velit ad irure non eiusmod eiusmod tempor nulla reprehenderit eiusmod consectetur velit consectetur. Ullamco culpa veniam do fugiat Lorem qui dolor excepteur ipsum dolor elit ex est. Sint quis cillum laborum occaecat exercitation id cupidatat exercitation.',
        date: new Date(),
      },
    ],
    comments: [
      {
        text: "Id deserunt commodo duis labore et anim aute culpa pariatur incididunt ea qui eiusmod. Aliquip do ex incididunt sunt et duis pariatur. Sit laborum cillum id elit anim do laboris. Velit esse irure laborum labore aute tempor.",
        date: new Date(),
      },
    ],
  },
  {
    firstName: 'Sigfrodr S.',
    lastName: 'Sigridrson',
    avatarURL: 'https://placebear.com/g/400/400',
    text: "Consequat mollit elit sit amet sunt eu nostrud cupidatat veniam consectetur. Laborum sunt aliquip excepteur velit ea qui ullamco consequat. Laborum cillum Lorem dolor nulla Lorem nostrud amet minim fugiat elit anim sit. Sint laboris commodo ipsum excepteur nostrud enim. Reprehenderit in sint ipsum et. Laboris culpa velit nostrud id veniam nostrud esse exercitation.",
    date: new Date(),
    posts: [
      {
        id: shortid.generate(),
        title: 'Esse anim eu id.',
        content: 'Eu et ipsum sit anim sunt officia qui cupidatat quis exercitation duis. Elit cillum Lorem quis sit enim ullamco laboris. Mollit qui Lorem sint ipsum enim et quis fugiat consectetur incididunt reprehenderit officia. Proident fugiat proident elit laborum ipsum eu id cupidatat. Irure deserunt incididunt consectetur dolore Lorem pariatur ex anim veniam. Ut incididunt reprehenderit consequat cillum et excepteur deserunt elit amet.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Ullamco cupidatat sint duis.',
        content: 'Duis sunt veniam esse mollit. Consequat fugiat minim sint aliquip. Aute reprehenderit tempor occaecat enim sint eu ad anim culpa quis Lorem nostrud. Velit aliquip do culpa consectetur proident cillum. Anim incididunt anim sint dolor culpa minim culpa excepteur deserunt in adipisicing. Consectetur amet quis qui ullamco qui elit. Consequat cillum incididunt ea deserunt mollit qui aliquip eiusmod quis est.',
        date: new Date(),
      },
      {
        id: shortid.generate(),
        title: 'Sit ea nulla velit.',
        content: 'Dolore irure sit culpa ex reprehenderit. Enim occaecat fugiat est do aute. Velit ad irure non eiusmod eiusmod tempor nulla reprehenderit eiusmod consectetur velit consectetur. Ullamco culpa veniam do fugiat Lorem qui dolor excepteur ipsum dolor elit ex est. Sint quis cillum laborum occaecat exercitation id cupidatat exercitation.',
        date: new Date(),
      },
    ],
    comments: [
      {
        text: "Id deserunt commodo duis labore et anim aute culpa pariatur incididunt ea qui eiusmod. Aliquip do ex incididunt sunt et duis pariatur. Sit laborum cillum id elit anim do laboris. Velit esse irure laborum labore aute tempor.",
        date: new Date(),
      },
    ],
  },
];
