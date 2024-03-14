// import React from 'react';

const AddTodoForm = ({ onAddTodo }) => {
    const hanldeAddTodo = (event) => {
        event.preventDefault()
        const todoTitle = event.target.title.value;
        onAddTodo(todoTitle)
        console.log(todoTitle);
        event.target.reset()
    }
    return (
        <form onSubmit={hanldeAddTodo}>
            <input name="title" type="text" />
            <button type="submit">Add Todo</button>
        </form>
    );
}
export default AddTodoForm;