import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CalendarItem({ name, color, handleCalendarSelected }) {
  return (
    <li>
      <input type='checkbox' id={`checkbox--${name.toLowerCase()}`} name="calendar" value={name} style={{ accentColor: color }} onClick={() => handleCalendarSelected(name) } /> 
      <label id={`checkbox--${name.toLowerCase()}`} className="medium">{name}</label>
      <span className='close-icon'>&#10005;</span>
      <FontAwesomeIcon icon={faEllipsisV} />    
    </li>
  )
}

export default CalendarItem