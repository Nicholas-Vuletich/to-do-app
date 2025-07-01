import {React} from "react"
import { useState } from "react";
import Header from "./components/header/header.jsx"
import Input from "./components/input/input.jsx"
import Filter from "./components/filter/filter.jsx"
import TaskList from "./components/taskList/taskList/"
import Footer from "./components/footer/footer"

function App() {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask() {
    if (inputValue.trim() === "") return;
    setTasks([...tasks, {text: inputValue, completed: false}]);
    setInputValue("");
  }

  const completedTasks = tasks.filter(task => task.completed).length;

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if(filter === "completed") return task.completed;
  })
  
  return (
    <div>
      <Header />
      <Input value={inputValue} onValueChange={setInputValue} onAdd={addTask} />
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <TaskList tasks={filteredTasks} onToggle={toggleTaskCompleted} onDelete={deleteTask} />
      <Footer totalTasks={tasks.length} completedTasks={completedTasks} />
    </div>
  )

  function toggleTaskCompleted(index) {
    const updatedTasks = tasks.map((task, i) => i === index ? {...task, completed: !task.completed} : task );
    setTasks(updatedTasks);
  }

}

export default App
