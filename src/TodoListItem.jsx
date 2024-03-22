// import React from 'react';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    const handleRemoveClick = () => {
        onRemoveTodo(todo.id);
    };
    return (
        <div>
            <li >{todo.title}
                <button type="button" onClick={handleRemoveClick}> Remove</button>
            </li>

        </div >
    );
}

export default TodoListItem;