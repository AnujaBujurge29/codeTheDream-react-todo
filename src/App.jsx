import { useState } from "react"

import "./App.css"
const todoList = [
  {
    id: 1,
    title: "Pre Work - assignment",
  },
  { id: 2, title: "Setup assignment" },
  { id: 3, title: "Complete assignment" },
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </>
  )
}

export default App
