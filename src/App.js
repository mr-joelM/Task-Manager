import { useState } from 'react'
import './App.css'
import AddToDo from './components/AddToDo'
import AddToDone from './components/AddToDone'
import DoneList from './components/DoneList'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [doneJobs, setDoneJobs] = useState([{ chore: 'wash the car' }])

  const [chores, setChores] = useState([
    { chore: 'Empty dishwasher' },
    { chore: 'Do the CSS for the Task/Chore App' },
    { chore: 'Do the hoovering' },
    { chore: 'Add an Empty-the-Done-list button' },
  ])
  return (
    <div className="App">
      <Header />
      <AddToDo setChores={setChores} />
      <ToDoList chores={chores} />
      <AddToDone
        chores={chores}
        setDoneJobs={setDoneJobs}
        setChores={setChores}
      />
      <DoneList doneJobs={doneJobs} />
    </div>
  )
}

export default App
