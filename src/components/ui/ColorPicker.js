import React from 'react'
import { CirclePicker } from 'react-color'

const ColorPicker = ({ color, handleCalendarColor }) => {
  return (
    <CirclePicker color={color} onChange={handleCalendarColor}/>
  )
}

export default ColorPicker
