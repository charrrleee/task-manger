import { useState } from 'react'
import '../App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  }

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    console.log(updatedTasks, tasks)
  };
  

  return (
    <>
      <div>
        <h1>Task Management</h1>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </>
  )
}

export default App
