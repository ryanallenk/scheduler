import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData () {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = day => setState({ ...state, day });
  
  
  useEffect (() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
    .then (all => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    })
  }, []);
  
  function bookInterview (id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const setAppointment = axios.put(`/api/appointments/${id}`, {
      interview,      
    })
    .then(setState({
      ...state,
      appointments
    }))

    return setAppointment;
  }

  function deleteInterview (id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const deleteAppt = axios.delete(`/api/appointments/${id}`, {
      interview: null,      
    })
    .then(setState({
      ...state,
      appointments
    }))
    return deleteAppt;
  }
  return {deleteInterview, bookInterview, setDay, state};
}