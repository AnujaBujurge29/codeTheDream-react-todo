// import { useState } from "react"

import AddTodoForm from "./AddTodoForm"
import "./App.css"
import TodoList from "./TodoList"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm />
    </>
  )
}

export default App
