import TodoListItem from "./TodoListItem";

// import React from 'react';
// const todoList = [
//     {
//         id: 1,
//         title: "Pre Work - assignment",
//     },
//     { id: 2, title: "Setup assignment" },
//     { id: 3, title: "Complete assignment" },
// ]

const TodoList = ({ todoList }) => {
    return (
        <div>
            <ul>
                {todoList.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} />
                })}
            </ul>
        </div>
    );
}

export default TodoList;
