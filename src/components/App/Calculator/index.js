import React, { Component } from 'react'

import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c',
    }

    // this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9)
  }
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
  }

  tryToConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) return ''
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      temperature,
      scale: 'c',
    })
  }
  handleFahrenheitChange = (temperature) => {
    this.setState({
      temperature,
      scale: 'f',
    })
  }

  render() {
    const {scale, temperature} = this.state
    const celsius = scale === 'f' ? this.tryToConvert(temperature, this.toCelsius) : temperature
    const fahrenheit = scale === 'c' ? this.tryToConvert(temperature, this.toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}
