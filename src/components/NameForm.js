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
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-8">
                <input className="form-control"
                  type="text"
                  value={this.state.value}
                  placeholder="Username"
                  onChange={this.handleChange}
                  />
            </div>
            <div className="col-4">
              <button className="form-control text-center" type="submit">Sing Up</button>
            </div>
          </div>
        </form>
    );
  }
}

export default NameForm;
