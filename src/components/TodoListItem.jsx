import style from './TodoListItem.module.css'
import PropTypes from "prop-types";

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
TodoListItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};
export default TodoListItem;