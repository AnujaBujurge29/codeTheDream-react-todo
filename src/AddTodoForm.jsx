// import React from 'react';

import { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('')

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value
        setTodoTitle(newTodoTitle)
    }

    const hanldeAddTodo = (event) => {
        event.preventDefault()
        // const todoTitle = event.target.title.value;
        // onAddTodo(todoTitle)
        // console.log(todoTitle);
        const newTodo = {
            id: Date.now(),
            title: todoTitle
        }
        onAddTodo(newTodo)
        console.log(newTodo);
        setTodoTitle('')
    }
    return (
        <form onSubmit={hanldeAddTodo}>
            <input name="title" type="text" value={todoTitle} onChange={handleTitleChange} />
            <button type="submit">Add Todo</button>
        </form>
    );
}
export default AddTodoForm;