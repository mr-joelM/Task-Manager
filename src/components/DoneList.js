const DoneList = ({ doneJobs }) => {
  return (
    <div>
      <h2>Done List</h2>
      <ul>
        {doneJobs.map((job) => {
          return (
            <li key={job.chore}>
              <p>{job.chore}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DoneList
