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