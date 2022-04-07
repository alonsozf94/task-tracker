import React from "react";
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";

function App() {

  // Declares task objects and initial data
  const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Doctors appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'School meeting',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false,
    }])
  
  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter(((task) => task.id !== id)))
  }

  //Toggle Reminder
  function toggleReminder(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id)
          return { ...task, reminder: !task.reminder }
        else
          return task
      }))
  }
  
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? 
        (<Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
        ) : (
          "No tasks to show"
        )
      }
    </div>
  )
}

export default App;
