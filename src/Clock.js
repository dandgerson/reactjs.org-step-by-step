import React from 'react';

export default class Clock extends React.Component {
  render() {
    return (
      <div className="clock">
        <h1>Clock</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
