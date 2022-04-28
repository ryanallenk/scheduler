import axios from "axios";
import { useState, useEffect } from "react";
import { getAppointmentsForDay } from "helpers/selectors";

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

    
    return axios
    .put(`/api/appointments/${id}`, {
       interview,      
     })
     .then(() => {
       setState({...state, appointments})
       updateSpots(id)
     })
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

    return axios
    .delete(`/api/appointments/${id}`, {
      interview: null,      
    })
    .then(() => {
      setState({...state, appointments})
      updateSpots(id)
    })
}

const countSpots = (state, dayToUpdate) => {
  let count = 0;
  const appointments = getAppointmentsForDay(state, state.days[dayToUpdate].name);
  
  appointments.forEach(appointment => {
    for (let key in appointment) {

      if (`${appointment[key]}` === "null") {
        count ++
      }
    }
  })
  return count
}
  function updateSpots (appointmentID) {
    // spots are stored in each day object at "spots"
    // the number of spots is found by looking at the possbile appointments for each day and seeing if the "interview" key has a value that is not null
    // we should update the spots whenever we save or delete an appointment
    const dayToUpdate = state.days.findIndex((day) => day.appointments.includes(appointmentID))
    
    setState((prev) => {
      const days = [...prev.days];
      days[dayToUpdate].spots = countSpots(prev, dayToUpdate)
      return { ...prev, days };
    });

  }
  
  return {deleteInterview, bookInterview, setDay, state};
}