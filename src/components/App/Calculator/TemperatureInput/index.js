import React, { Component } from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

export default class TemperatureInput extends Component {
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
    const { temperature } = this.state
    const { scale } = this.props

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input
          value={temperature}
          onChange={(event) => this.handleChange(event)}
        />
      </fieldset>
    )
  }
}
