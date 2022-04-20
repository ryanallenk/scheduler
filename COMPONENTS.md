# Scheduler project breakdown

## Components

- Button
- DayList
- DayListItem
- InterviewerList
- InterviewerListItem
- Appointment
- Appointment/Header
- Appointment/Empty
- Appointment/Show
- Appointment/Form
- Appointment/Status
- Appointment/Error
- Appointment/Confirm

### Button

- State: NO STATE
- Props: confirm (boolean), disabled (boolean), danger, boolean, onClick (function), clickable
- Used by: EVERYONE

### DayList

- State:
- Props:
- Used by:

### DayListItem

- State:
- Props:
- Used by:

### InterviewerList

- State:
- Props:
- Used by:

### InterviewerListItem

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

- State:
- Props:
  1. id:number - the id of the interviewer
  2. name:string - the name of the interviewer
  3. avatar:url - a url to an image of the interviewer
  4. selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.
  5. setInterviewer:function - is run when the <InterviewerListItem> is clicked. This function receives the interviewer's id as an argument. It sets the selected interviewer.

- Used by:

### Appointment

- State:
- Props:
- Used by:

### Appointment/Header

- State:
- Props:
- Used by:

### Appointment/Empty

- State:
- Props:
- Used by:

### Appointment/Show

- State:
- Props:
- Used by:

### Appointment/Form

- State:
- Props:
- Used by:

### Appointment/Status

- State:
- Props:
- Used by:

### Appointment/Error

- State:
- Props:
- Used by:

### Appointment/Confirm

- State:
- Props:
- Used by: