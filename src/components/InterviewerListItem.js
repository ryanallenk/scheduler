import React from "react"
import "components/InterviewerListItem.scss"
import classNames from "classnames"

export default function InterviewerListItem (props) {
let listClass = classNames("interviewers__item", {"interviewers__item--selected": props.selected});

const name = function () {
  if (props.selected) {
    return `${props.name}`
  }
}
  return (
    <li onClick={() => props.setInterviewer(props.id)} className={listClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {name()}
    </li>
  )
}