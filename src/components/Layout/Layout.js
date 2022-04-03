import React from 'react'
import CalendarScreen from '../calendar/CalendarScreen'
import Navbar from '../ui/Navbar'
import Sidebar from '../ui/Sidebar'

function Layout() {
  return (
      <>
        <Navbar />

        <main className='main-layout'>
            <Sidebar />
            <CalendarScreen />
        </main>
      </>
  )
}

export default Layout