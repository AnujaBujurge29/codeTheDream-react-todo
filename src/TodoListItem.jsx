const TodoListItem = ({ todo, onRemoveTodo }) => {
    const handleRemoveClick = () => {
        onRemoveTodo(todo.id);
    };
    return (
        <div>
            <li >{todo.title}&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" onClick={handleRemoveClick}>Remove</button>
            </li>

        </div >
    );
}
export default TodoListItem;