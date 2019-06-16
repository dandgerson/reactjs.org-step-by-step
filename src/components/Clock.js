import React from 'react';

import Toggle from './Toggle';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      show: true,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (e) => {
    this.setState(state => ({show: !state.show}));

    const DOMclock = e.target.parentElement.querySelector('.clock');
    DOMclock.hidden = !DOMclock.hidden;
  }

  render() {
    return (
      <div>
        <Toggle
          isToggleOn={this.state.show}
          onClick={this.handleClick}
        />
        <span className="clock">{this.state.date.toLocaleTimeString('ru')}</span>
      </div>
    );
  }
}

export default Clock;
