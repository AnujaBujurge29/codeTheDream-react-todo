import { useState } from "react"

import AddTodoForm from "./AddTodoForm"
import "./App.css"
import TodoList from "./TodoList"

function App() {

  const [todoList, setTodoList] = useState([])
  // const [newTodo, setNewTodo] = useState('')

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo}</p> */}
    </>
  )
}

export default App
