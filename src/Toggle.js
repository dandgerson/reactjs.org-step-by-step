import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }

  handleClick = (event) => {
    event.target.classList.toggle('on');
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));

  }
    
  render() {

    return (
      <button
        className="toggle"
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
