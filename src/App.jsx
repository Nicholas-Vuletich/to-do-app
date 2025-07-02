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
    setTasks([...tasks, {text: inputValue, completed: false, isEditing: false}]);
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

  function clearCompletedTasks() {
    const activeTasks = tasks.filter(task => !task.completed);
    setTasks(activeTasks);
  }

  function startEditingTask(index) {
    const updatedTasks = tasks.map((task, i) => i === index ? {...task, isEditing: true } : task);
    setTasks(updatedTasks);
  }

  function saveTaskEdit(index, newText) {
    const updatedTasks = tasks.map((task, i) => i === index ? {...task, text: newText, isEditing: false } : task);
    setTasks(updatedTasks);
  }

  function toggleTaskCompleted(index) {
    const updatedTasks = tasks.map((task, i) => i === index ? {...task, completed: !task.completed} : task );
    setTasks(updatedTasks);
  }


  
  return (
    <div>
      <Header />
      <Input value={inputValue} onValueChange={setInputValue} onAdd={addTask} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} clearCompletedTasks={clearCompletedTasks} />
      <TaskList tasks={filteredTasks} onToggle={toggleTaskCompleted} onDelete={deleteTask} onStartEditing={startEditingTask} onSaveEdit={saveTaskEdit} />
      <Footer totalTasks={tasks.length} completedTasks={completedTasks} />
    </div>
  )

}
export default App
