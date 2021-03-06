import React from 'react';

// import * as helpers from '../helpers';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event) => {
    console.log('JSON-data updates with... ' + this.state.value);
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
              <input className="form-control text-center"
                type="submit"
                value="Sing Up" />
            </div>
          </div>
        </form>
    );
  }
}

export default NameForm;
