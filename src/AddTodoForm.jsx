// import React from 'react';

const AddTodoForm = () => {
    return (
        <div>
            <form>
                <label htmlFor='todoTitle'>Title</label><br /><br />
                <input id='todoTitle'></input><br /><br />
                <button type="submit">Add</button>
            </form>
        </div >
    );
}

export default AddTodoForm;
