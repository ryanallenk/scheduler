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

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

- State:
- Props:
  1. interviewers:array - an array of objects as seen above
  2. setInterviewer:function - a function that accepts an interviewer id. This function will simply be passed down to the <InterviewerListItem>
  3. interviewer:number - a number that represents the id of the currently selected  interviewer
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
1. student:String eg. "Lydia Miller-Jones"
2. interviewer:Object we can use the interview object that already exists in stories/index.js for this
3. onEdit:Function to be called when the user clicks the Edit button
4. onDelete:Function to be called when the user clicks the Delete button
- Used by:

### Appointment/Form
The <Form> component will need to track the state of the two elements (the student's name (the text input field) as a string and the selected interviewer's ID as a number)

It will use an <input /> element to accept the name of the student, and the <InterviewerListItem /> component to display the selected interviewer.

When we create the appointment, the student will default to "". The interviewer state will default to null.
If there is an interview booked, then the name of the student and the ID of the interviewer should be used to initialize these values.

- State:
student:String
interviewer:Number

- Props:
student:String
interviewers:Array
interviewer:Number
onSave:Function
onCancel:Function
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