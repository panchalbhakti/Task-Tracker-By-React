const tasks = [
    {
        id: 1,
        text: 'Doctor Appointment',
        date: 9-8-24,
    },
    {
        id: 2,
        text: 'Shopping',
        date: 10-8-24,
    },
    {
        id: 3,
        text: 'Workout',
        date: 11-8-24,
    },
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h6 key={task.id}>{task.text}</h6>
        )
        )}
    </>
  )
}

export default Tasks
