import { Fragment, useEffect, useState } from "react"
import AddTodoForm from "./components/AddTodoForm"
import "./App.css"
import TodoList from "./components/TodoList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetchData();
  }, [isAscending]);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      }
    }
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`Error: ${response.status} `)
      }
      const data = await response.json()

      console.log(data);

      // const todos = data.records.map(record => ({
      //   title: record.fields.title,
      //   id: record.id
      // }));
      data.records.sort((objectA, objectB) => {
        const titleA = objectA.fields.title.toUpperCase();
        const titleB = objectB.fields.title.toUpperCase();
        if (titleA < titleB) {
          return isAscending ? -1 : 1;
        }
        if (titleA > titleB) {
          return isAscending ? 1 : -1;
        }
        return 0;
      });

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
    setTodoList(prevTodoList => {
      const updatedTodoList = [...prevTodoList, newTodo];
      return updatedTodoList.sort((objectA, objectB) => {
        const titleA = objectA.title.toUpperCase();
        const titleB = objectB.title.toUpperCase();
        if (titleA < titleB) {
          return isAscending ? -1 : 1;
        }
        if (titleA > titleB) {
          return isAscending ? 1 : -1;
        }
        return 0;
      });
    });
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Fragment className="wrapper">
            <h1 className="box header">Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            <button onClick={toggleSortOrder} className="box footer">
              Toggle Sort Order
            </button>
          </Fragment>
        }>
        </Route>
        <Route path="/new" element={<h2>New Todo List</h2>} />
      </Routes>
    </BrowserRouter >
  )
}
export default App