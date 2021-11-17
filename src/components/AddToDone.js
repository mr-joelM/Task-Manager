const AddToDone = ({ chores, setDoneJobs, setChores }) => {
  const handlesubmit = (event) => {
    event.preventDefault()
    setDoneJobs((currentJobsDone) => {
      const newCurrentJobs = currentJobsDone.map((jobs) => {
        return { ...jobs }
      })
      newCurrentJobs.push({ chore: event.target.transfer.value })

      return newCurrentJobs
    })
    setChores((currentJobs) => {
      let choreIndex
      const newCurrentJobs = currentJobs.map((jobs, index) => {
        const newJobs = { ...jobs }
        if (newJobs.chore === event.target.transfer.value) {
          choreIndex = index
        }
        return newJobs
      })
      const slicedJobs = newCurrentJobs
        .slice(0, choreIndex)
        .concat(newCurrentJobs.slice(choreIndex + 1))
      return slicedJobs
    })
  }

  return (
    <form onSubmit={handlesubmit}>
      <label htmlFor="transfer">Move to Done List: </label>
      <select id="transfer" name="transfer" type="dropdown">
        {chores.map((job) => {
          return (
            <option key={job.chore} value={job.chore}>
              {job.chore}
            </option>
          )
        })}
      </select>
      <button type="submit">Move</button>
    </form>
  )
}

export default AddToDone
