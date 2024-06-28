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
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("saveTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      sortTodoList(todoList, isAscending);
    }
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
      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id
      }));

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


      sortTodoList(todos, isAscending);
      setTodoList(todos);
      setIsLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const sortTodoList = (list, ascending) => {
    list.sort((objectA, objectB) => {
      const titleA = objectA.title.toUpperCase();
      const titleB = objectB.title.toUpperCase();
      if (titleA < titleB) {
        return ascending ? -1 : 1;
      }
      if (titleA > titleB) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    setTodoList([...list]);
  };



  const addTodo = async (newTodo) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          title: newTodo.title,
        },
      }),
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const addedTodo = {
        title: data.fields.title,
        id: data.id,
      };
      const updatedTodoList = [...todoList, addedTodo];
      sortTodoList(updatedTodoList, isAscending);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const updatedTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error("Error removing todo:", error);
    }
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