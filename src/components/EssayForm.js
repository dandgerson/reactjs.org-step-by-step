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
        <label>
          Essay:
          <textarea
            value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input
          type="submit"
          value="Submit" />
      </form>
    );
  }
}

export default EssayForm;
