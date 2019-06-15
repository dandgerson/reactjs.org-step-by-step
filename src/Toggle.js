import React from 'react';

export default class Toggle extends React.Component {
  render() {

    return (
      <div className="toggle">
        <button onClick={this.props.onClick}>
          {this.props.name} {this.props.isToggleOn ? 'ON' : 'OFF'}
        </button>
        {this.props.renderComponent()}
      </div>
    );
  }
}
