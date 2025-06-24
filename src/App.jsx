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
    setTasks([...tasks, inputValue]);
    setInputValue("");
  }
  
  return (
    <div>
      <Header />
      <Input value={inputValue} onValueChange={setInputValue} onAdd={addTask} />
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  )
}

export default App
