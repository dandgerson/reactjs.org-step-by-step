import React from 'react';

class MiniFormik extends React.Component {

  state = {};

  render() {
    return this.props.children({...this.state});
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
 
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <MiniFormik>
            {() => <form>
              <div className="row">
                <div className="col">
                  <label>
                    Is going:
                    <input className="form-control checkbox" name="isGoing"
                      type="checkbox"
                      checked={this.state.isGoing}
                      onChange={this.handleInputChange} />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Number of guests:
                    <input className="form-control" name="numberOfGuests"
                      type="number"
                      value={this.state.numberOfGuests}
                      onChange={this.handleInputChange} />
                  </label>
                </div>
              </div>
            </form>}
          </MiniFormik>
        </div>
      </div>
    );
  }
}

export default Reservation;
