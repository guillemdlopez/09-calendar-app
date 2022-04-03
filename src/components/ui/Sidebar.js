import React, { useState } from 'react'
import styles from '../../sidebar.module.css';
import CalendarNewModal from '../calendar/CalendarNewModal';

function Sidebar() {
    const [openModal, setOpenModal] = useState(false)
    const handleCreateCalendar = () => {
        setOpenModal(true)
    }
    
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__header}>
            <p className={styles.subtitle}>My calendars</p>
            <button className={styles.create} onClick={handleCreateCalendar}>+</button>
        </div>

        {openModal && <CalendarNewModal openModal={openModal}/>}
        {openModal && <div className='overlay'></div>}
    </div>
  )
}

export default Sidebar