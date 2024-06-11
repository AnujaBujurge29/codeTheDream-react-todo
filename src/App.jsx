import { Fragment, useEffect, useState } from "react"
import AddTodoForm from "./AddTodoForm"
import "./App.css"
import TodoList from "./TodoList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      }
    }
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} `)
      }
      const data = await response.json()
      console.log(data);
      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));

      console.log(todos); // Todos array
      setTodoList(todos);
      setIsLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("saveTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Fragment>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </Fragment>
        }>
        </Route>
        <Route path="/new" element={<h2>New Todo List</h2>} />
      </Routes>
    </BrowserRouter >
  )
}
export default App