import React from 'react'
import AppointmentCard from './designs/AppointmentCard'

export default function AppointmentGrid() {
  return (
    <div className={`grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-5 duration-300 ease-in`}>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>
              <AppointmentCard title='this is a test meeting' time='9:11 AM'/>               
            </div>
  )
}
