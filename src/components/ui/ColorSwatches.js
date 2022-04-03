import React from 'react'
import styles from '../../NewModal.module.css'

function ColorSwatches({ name, value, handleCalendarColor }) {
  const handleClickSwatch = (e) => {
    const swatches = document.querySelectorAll('.color-swatch')
    swatches.forEach(swatch => swatch.classList.remove('active-swatch'));

    e.target.classList.add('active-swatch')
  }
  return (
    <>
    <input id={name} type="radio" value={value} name="color" onClick={ handleCalendarColor }/>
    <label htmlFor={name} className="color_swatch" style={{ background: value }} onClick={handleClickSwatch}></label>
    </>
  )
}

export default ColorSwatches