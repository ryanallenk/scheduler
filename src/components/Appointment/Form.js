import React, { useState } from "react"
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  const onSave = function () {
    console.log("Saved!")
  }
  const reset = () => {
    setInterviewer(null)
    setStudent("")
  }
  const onCancel = function () {
    reset()
    props.onCancel()
  }
  
  return (
  <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          value={student}
          onChange={(event) => setStudent(event.target.value)}
        />
      </form>
      <InterviewerList
        interviewers={props.interviewers}
        onChange={(event) => setInterviewer(event)}
        value={interviewer}
      />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={onCancel}>Cancel</Button>
        <Button confirm onClick={onSave}>Save</Button>
      </section>
    </section>
  </main>
  )
}