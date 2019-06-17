import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an assay about your favorite DOM element.',
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    console.log('update JSON-data');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="col">
          <textarea className="form-control"
            value={this.state.value}
            onChange={this.handleChange} />
        </div>
        <div className="col">
          <input className="form-control"
            type="submit"
            value="Submit" />
        </div>
      </div>
      </form>
    );
  }
}

export default EssayForm;
