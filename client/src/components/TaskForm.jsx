import {useState} from "react"

const TaskForm = ({addTask}) => {
    const [task, setTask] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        if(!task) {
            alert("Enter a task!")
            return;
        }
        
        addTask({text: task})

        setTask("")
    }
  return (
    
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="task">Task</label>
            <input type="text" placeholder="Add Task"
            value={task} onChange={(e) => setTask(e.target.value)}/>
        </div>
        <button className="save-btn">Save Task</button>
    </form>
  )
}

export default TaskForm