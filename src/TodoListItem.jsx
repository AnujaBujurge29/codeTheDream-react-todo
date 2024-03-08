// import React from 'react';


const TodoListItem = ({ todo }) => {
    return (
        <div>
            <li >{todo.title}</li>
            {/* <p>This is multi line return:</p>
            <p> Line 1</p>
            <p> Line 2</p>
            <p> Line 3</p> */}
        </div >
    );
}

export default TodoListItem;
