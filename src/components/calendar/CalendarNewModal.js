import React, { useState } from 'react';
import styles from '../../NewModal.module.css';
import ColorSwatches from '../ui/ColorSwatches';

const colorSwatches = [
    {name: 'blue', value: '#007bff'},
    {name: 'orange', value: '#FBBC06'},
    {name: 'green', value: '#34A853'},
    {name: 'red', value: '#EA4335'}
]

function CalendarNewModal({ openModal }) {
    const [formValues, setFormValues] = useState({ calendar: "Calendar", color: "" })

    const {calendar, color} = formValues;

    const handleCalendarColor = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(calendar, color);
    }

  return (
    <div className={`${styles.calendar_new_modal} ${openModal ? styles.open : ''}`}>
        <h2>Create new calendar</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="calendar" pattern='[^0-9]{5,}' value={calendar} onChange={handleInputChange}/>
            <p>Select a color for {calendar}</p>
            <div className={styles.swatches}>
                {
                    colorSwatches.map(swatch => {
                        const { name, value } = swatch;
                        return <ColorSwatches key={value} name={name} value={value} handleCalendarColor={handleCalendarColor} onClick={handleCalendarColor}/>
                    })
                }
            </div>
            <button className={`${styles.submit_btn} primary-btn`}>Create</button>
        </form>
    </div>
  )
}

export default CalendarNewModal