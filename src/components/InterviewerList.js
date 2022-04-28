import React from "react"
import PropTypes from 'prop-types';
import InterviewerListItem from "./InterviewerListItem"
import "components/InterviewerList.scss"

export default function InterviewerList ({value, onChange, interviewers}) {

  const interviewerItems = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem 
      key = {interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={() => onChange(interviewer.id)}
      selected={interviewer.id === value}
      />
    )
  })
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerItems}</ul>
    </section>
  )
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};