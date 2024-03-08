import { useState } from "react"

import AddTodoForm from "./AddTodoForm"
import "./App.css"
import TodoList from "./TodoList"

function App() {
  // const [count, setCount] = useState(0)
  const [newTodo, setNewTodo] = useState('')

  return (
    <>
      <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
    </>
  )
}

export default App
