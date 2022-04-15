import React from 'react'

function ColorSwatches({ name, value, handleCalendarColor }) {
  return (
    <>
    <input id={name} type="radio" value={value} name="color" onClick={ handleCalendarColor }/>
    <label htmlFor={name} className="color_swatch" style={{ background: value }}></label>
    </>
  )
}

export default ColorSwatches