// selectors are NOT react i.e. just JS

export function getAppointmentsForDay(state, day) {
  const appointmentsObject = state.days.find((appointment) => appointment.name === day)
  let appointmentsArray = []
  if (!appointmentsObject) {
    return []
  }
  for (const element of appointmentsObject.appointments) {
    appointmentsArray.push(state.appointments[element])
  }
  return appointmentsArray
}

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  const interviewersObj = state.interviewers;
  const interviewerKey = interview.interviewer 

  return {...interview, interviewer:interviewersObj[interviewerKey]}
}

export function getInterviewersForDay(state, day) {
  const interviewersObject = state.days.find((element) => element.name === day)
  let interviewersArray = [];
  if (!interviewersObject) {
    return []
  }
  for (const element of interviewersObject.interviewers) {
    interviewersArray.push(state.interviewers[element])
  }
  return interviewersArray
}