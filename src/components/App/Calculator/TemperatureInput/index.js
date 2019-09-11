import React from 'react'

const TemperatureInput = (props) => {
  const { temperature, scale, handleChange } = props
  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  }
  
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}</legend>
      <input
        value={temperature}
        onChange={(event) => handleChange(event.target.value)}
      />
    </fieldset>
  )
}


export default TemperatureInput
