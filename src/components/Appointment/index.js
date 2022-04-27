import React from 'react'
import Header from './Header'
import Show from './Show'
import Empty from './Empty'
import Form from './Form'
import Status from './Status'
import Confirm from './Confirm'
import useVisualMode from 'hooks/useVisualMode'

import "components/Appointment/styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const DELETING = "DELETING";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment (props) {
const {mode, transition, back} = useVisualMode (
  (props.interview) ? SHOW : EMPTY
)

function confirm () {
  transition(CONFIRM);
}

function deleteAppt () {
  transition(DELETING)
  props
  .onDelete(props.id)
  .then(() => transition(EMPTY))
  .catch(error => transition(ERROR_DELETE));
}

function edit () {
  transition(EDIT)
}


function save(name, interviewer) {
  const interview = {
    student: name,
    interviewer
  };
  
  transition(SAVING);
  props
  .book(props.id, interview)
  .then(() => transition(SHOW))
  .catch(error => transition(ERROR_SAVE));
}

  return (
    <article className="appointment">
      <Header time={props.time}></Header>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirm}
          onEdit={edit}
        />
      )}
      {mode === CREATE && (<Form
      interviewers={props.interviewers}
      onSave={save}
      onCancel={back}

      />)}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRM && <Confirm 
      onCancel={back}
      onConfirm={deleteAppt}
      message={"Are you sure you would like to delete?"}
      />}
      {mode === EDIT && <Form
      interviewers={props.interviewers}
      interviewer={props.interview.interviewer.id}
      student={props.interview.student}
      onCancel={back}
      onSave={save}
      />}
      {mode === DELETING && <Status message={"Deleting"} />}
      
    </article>
  )
}