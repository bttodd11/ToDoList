import './App.css';
import Tasks from "./Tasks/Tasks";

const App = () =>{

  return(
    <div id="appBorder">
      <div className="taskSection">
        <h2 className="taskTitle">To Do List</h2>
          <Tasks />
          </div>
      </div>
  )

}

export default App;

