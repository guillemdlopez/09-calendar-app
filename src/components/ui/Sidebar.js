import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from '../../sidebar.module.css';
import CalendarItem from '../calendar/CalendarItem';
import CalendarNewModal from '../calendar/CalendarNewModal';
import { highlightCalendar } from '../../actions/calendars'

function Sidebar() {
    const [openModal, setOpenModal] = useState(false)
    const state = useSelector( state => state.calendar );
    const dispatch = useDispatch();


    const { calendars } = state;

    const handleCreateCalendar = () => {
        setOpenModal(true)
    }

    const handleCalendarSelected = (name) => {
      dispatch(highlightCalendar(name))
    }
    
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
            <p className={styles.subtitle}>My calendars</p>
            <button className={styles.create} onClick={handleCreateCalendar}>+</button>
        </div>
        
        {/* CALENDAR LIST */}
        { calendars.length > 0 && 
          <ul className={styles.list}>
            { calendars.map((calendar, ind) => {
              const { name, color } = calendar
              return <CalendarItem key={ind} name={name} color={color} handleCalendarSelected={handleCalendarSelected} />
            }) }
          </ul> 
        }

        {openModal && <CalendarNewModal openModal={openModal} setOpenModal={setOpenModal}/>}
        {openModal && <div className='overlay'></div>}
    </div>
  )
}

export default Sidebar