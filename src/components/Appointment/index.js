import React from 'react'
export default function Appointment (props) {
const body = () => {
  if (props.time) {
    return `Appointment at ${props.time}`
  }
  return `No Appointments`
} 
  return (
    <article className="appointment">
      {body()}
    </article>
  )
}