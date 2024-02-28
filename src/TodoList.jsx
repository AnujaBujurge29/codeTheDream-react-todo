// import React from 'react';
const todoList = [
    {
        id: 1,
        title: "Pre Work - assignment",
    },
    { id: 2, title: "Setup assignment" },
    { id: 3, title: "Complete assignment" },
]

const TodoList = () => {
    return (
        <div>
            <ul>
                {todoList.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    );
}

export default TodoList;
