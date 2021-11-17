const ToDoList = (props) => {
  const { chores } = props
  return (
    <div>
      <h2>To Do List</h2>
      <ul name="chores">
        {chores.map((job) => {
          return (
            <li key={job.chore} value={job.chore}>
              <p>{job.chore}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDoList
