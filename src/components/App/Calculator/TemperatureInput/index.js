import React from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

const TemperatureInput = (props) => {
  const { temperature, scale, onTemperatureChange } = props

  const handleChange = (event) => {
    onTemperatureChange(event.target.value)
  }

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input
        value={temperature}
        onChange={handleChange}
      />
    </fieldset>
  )
}


export default TemperatureInput
