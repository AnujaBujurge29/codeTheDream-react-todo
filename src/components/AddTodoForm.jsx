import { useState } from "react";
import PropTypes from "prop-types";
import "../App.css"
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
                className="box content"
                id="todo-title"
                value={todoTitle}
                onInputChange={handleTitleChange}
                label="Title"
            ><span>New Title:</span>&nbsp;&nbsp;&nbsp;
            </InputWithLabel>
            <button type="submit" className="btn btn-primary mt-3 box sidebar">
                Add Todo
            </button>
        </form>
    );
}
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
}
export default AddTodoForm;