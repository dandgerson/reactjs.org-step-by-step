import React, { Component } from 'react'

import BoilingVerdict from './BoilingVerdict'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
    }
  }

  handleChange(event) {
    this.setState({
      temperature: event.target.value,
    })
  }

  render() {
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>Enter temperature in Celcius:</legend>
        <input
          value={temperature}
          onChange={event => this.handleChange(event)}
        />

        <BoilingVerdict
          celcius={parseFloat(temperature)}
        />
      </fieldset>
    )
  }
}
