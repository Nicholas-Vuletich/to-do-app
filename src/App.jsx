import {React} from "react"
import { useState } from "react";
import Header from "./components/header/header.jsx"
import Input from "./components/input/input.jsx"
import TaskList from "./components/taskList/taskList/"
import Footer from "./components/footer/footer"

function App() {

  const [inputValue, setInputValue] = useState("");
  
  return (
    <div>
      <Header />
      <Input value={inputValue} onValueChange={setInputValue} />
      <TaskList textToDisplay={inputValue} />
      <Footer />
    </div>
  )
}

export default App
