import React from "react";

import "components/Application.scss";

import DayList from "./DayList";
import Appointment from "./Appointment";

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

import useApplicationData from "hooks/useApplicationData.js"


export default function Application(props) {
  const { deleteInterview, bookInterview, setDay, state } = useApplicationData();
  
  
  const dailyAppointments = getAppointmentsForDay({appointments: state.appointments, days: state.days}, state.day);

  const appointmentItems = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview)
      const interviewers = getInterviewersForDay(state, state.day)
    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        book={bookInterview}
        onDelete={deleteInterview}
        interviewers={interviewers}
      />
    )
  })
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentItems}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
