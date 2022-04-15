import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCalendar } from '../../actions/calendars';
import styles from '../../NewModal.module.css';
import ColorPicker from '../ui/ColorPicker';

function CalendarNewModal({ openModal, setOpenModal }) {
    const [formValues, setFormValues] = useState({ calendar: "Calendar", color: "red" });
    const dispatch = useDispatch();


    const {calendar, color} = formValues;

    const handleCalendarColor = (color) => {
        const { hex } = color;

        setFormValues({
            ...formValues,
            "color": hex
        });
    };

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNewCalendar(formValues));
        setOpenModal(false)
    };

  return (
    <div className={`${styles.calendar_new_modal} ${openModal ? styles.open : ''}`}>
        <h2>Create new calendar</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="calendar" value={calendar} onChange={handleInputChange}/>
            <p>Select a color for {calendar}</p>
            <div className={styles.swatches}>
                <ColorPicker 
                    color={color}
                    handleCalendarColor={handleCalendarColor} 
                />
            </div>
            <button className={`${styles.submit_btn} primary-btn`}>Create</button>
        </form>
    </div>
  )
}

export default CalendarNewModal