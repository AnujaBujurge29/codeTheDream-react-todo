import { Fragment, useEffect, useState } from "react"

import AddTodoForm from "./AddTodoForm"
import "./App.css"
import TodoList from "./TodoList"
const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("saveTodoList");
    return savedTodoList ? JSON.parse(savedTodoList) : [];
  })
  useEffect(() => {
    localStorage.setItem('saveTodoList', JSON.stringify(todoList))
  }, [todoList])
  return [todoList, setTodoList]
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState()
  // const [newTodo, setNewTodo] = useState('')

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <Fragment>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

    </Fragment>
  )
}
export default App