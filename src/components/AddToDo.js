import { useState } from 'react'

const AddToDo = ({ setChores }) => {
  const [newChore, setNewChore] = useState('')

  const handleChange = (event) => {
    setNewChore(event.target.value)
    //console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setChores((currentList) => {
      const newList = [...currentList]
      const newAddedChore = { chore: newChore }
      newList.push(newAddedChore)
      return newList
    })
    setNewChore('')
  }

  //console.log(newChore);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add To Do List </h2>
      <label htmlFor="chore">Add Task/Chores to list: </label>
      <input
        id="chore"
        name="chore"
        type="text"
        onChange={handleChange}
        required
        autoComplete="off"
        value={newChore}
      ></input>
      <button>Submit</button>
    </form>
  )
}

export default AddToDo
