import React from 'react';

import * as helpers from '../helpers';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event) => {
    console.log('JSON-data updates...');
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              />
          </label>
          <input
            type="submit"
            value="Submit" />
        </form>
      </div>

    );
  }
}

export default NameForm;
