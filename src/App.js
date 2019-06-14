import React from 'react';

export default class App extends React.Component {
  render() {
    const name = 'Dmitry G. Anderson';
    return (
      <h1>Hello, World and <span className="impressive-text">{name}</span>!</h1>
    );
  }
}
