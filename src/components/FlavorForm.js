import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'coconut'};
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  handleSumbit = event => {
    console.log(
      'Your favorite flavor is: ' + this.state.value,
      '(json data updated)'
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="flavor-form-container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSumbit}>
              <div className="row">
                <div className="col d-flex align-items-center">
                  <label>
                    Pick your favorite flavor:
                    <select value={this.state.value}
                      className="form-control"
                      onChange={this.handleChange}>
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                </div>
                <div className="col d-flex align-items-center">
                  <input type="submit"
                    className="form-control"
                    value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlavorForm;
