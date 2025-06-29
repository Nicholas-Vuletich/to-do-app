import {React} from "react"
import { useState } from "react";
import Header from "./components/header/header.jsx"
import Input from "./components/input/input.jsx"
import TaskList from "./components/taskList/taskList/"
import Footer from "./components/footer/footer"

function App() {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, {text: inputValue, completed: false}]);
    setInputValue("");
  }

  const completedTasks = tasks.filter(task => task.completed).length;
  
  return (
    <div>
      <Header />
      <Input value={inputValue} onValueChange={setInputValue} onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTaskCompleted} />
      <Footer totalTasks={tasks.length} completedTasks={completedTasks} />
    </div>
  )

  function toggleTaskCompleted(index) {
    const updatedTasks = tasks.map((task, i) => i === index ? {...task, completed: !task.completed} : task );
    setTasks(updatedTasks);
  }

}

export default App
