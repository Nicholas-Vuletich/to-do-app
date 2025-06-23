import {React} from "react"
import Header from "./components/header/header.jsx"
import Input from "./components/input/input.jsx"
import TaskList from "./components/taskList/taskList/"
import Footer from "./components/footer/footer"

function App() {
  
  return (
    <div>
      <Header />
      <Input />
      <TaskList />
      <Footer />
    </div>
  )
}

export default App
