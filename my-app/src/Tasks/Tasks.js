import React from "react";
import { useState } from 'react';
import './Tasks.css';

const Tasks = () => {


  // Using useState to set the task and also to create my to do list 
  const [task, setTask] = useState("");
  const [toDoList, setToDoList] = useState([]);

  // This function will add my task to my list 
  let addTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {

      setToDoList(prevValue => [...toDoList, task])
    }

  }

  // This function will set the state of my inputed task
  let currentTask = (e) => {
    setTask(e.target.value)
  }

  // This function will remove your task from the list
  let removeTask = (task) => {
    toDoList.splice(toDoList.indexOf(task), 1)
    setToDoList([...toDoList])
  }


  return (
    <div>
      <div>
        <form className="inputBox" onSubmit={addTask}>
          <span className="enterTitle">Enter Task </span>
          <input onChange={currentTask} placeholder="Task">
          </input>
          <button type="submit">+</button>
        </form>
      </div>
      {toDoList.length !== 0 ?
        <div>
          <ol start="1">
            {toDoList.map(list => (
              <li onClick={() => removeTask(list)} className="taskList">{list} </li>
            ))}
          </ol>
        </div> :
        <div className="noTasks">No Task Assigned</div>
      }
    </div>
  )

}

export default Tasks;
