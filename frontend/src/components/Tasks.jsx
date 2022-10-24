import Task from "./Task"

const Tasks = ({tasks, deleteTask}) => {
  return (
    <>
        {tasks.map((task, index) => (
            <Task key={index} task={task} deleteTask={deleteTask}/>
        ))}
    </>
  )
}

export default Tasks