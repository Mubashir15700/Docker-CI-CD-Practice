import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import axios from "axios";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("/tasks");
      console.log(data);
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await fetch("/tasks", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`/tasks/${id}`);

    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="container">
      <Header
        formToggle={() => setShowForm(!showForm)}
        currentState={showForm}
      />
      {showForm && <TaskForm addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        "No tasks!"
      )}
    </div>
  );
};

export default App;
