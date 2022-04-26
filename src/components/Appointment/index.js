import React from 'react'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import Form from './Form'
import Status from './Status'
import useVisualMode from 'hooks/useVisualMode'

import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";

export default function Appointment (props) {
const {mode, transition, back} = useVisualMode (
  (props.interview) ? SHOW : EMPTY
)

function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  
  transition(SAVING);
  props.book(props.id, interview).then(transition(SHOW))
  // transition(SHOW);
}

  return (
    <article className="appointment">
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (<Form
      interviewers={props.interviewers}
      onSave={save}
      onCancel={() => back()}

      />)}
      {mode === SAVING && <Status/>}
      
    </article>
  )
}