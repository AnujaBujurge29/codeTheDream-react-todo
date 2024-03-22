// import React from 'react';

import { useState } from "react";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('')

    const handleTitleChange = (e) => {
        const newTodoTitle = e.target.value
        setTodoTitle(newTodoTitle)
    }

    const hanldeAddTodo = (event) => {
        event.preventDefault()
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
            <InputWithLabel
                id="todo-title"
                value={todoTitle}
                onInputChange={handleTitleChange}
                label="Title"
            >New Title:&nbsp;&nbsp;&nbsp;
            </InputWithLabel>
            <button type="submit" className="btn btn-primary mt-3">
                Add Todo
            </button>
        </form>
    );
}
export default AddTodoForm;