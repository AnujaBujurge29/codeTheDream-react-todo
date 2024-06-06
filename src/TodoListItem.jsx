
import style from './TodoListItem.module.css'
const TodoListItem = ({ todo, onRemoveTodo }) => {
    const handleRemoveClick = () => {
        onRemoveTodo(todo.id);
    };
    return (
        <div>
            <li className={style.ListItem} >{todo.title}&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" onClick={handleRemoveClick}>Remove</button>
            </li>

        </div >
    );
}
export default TodoListItem;