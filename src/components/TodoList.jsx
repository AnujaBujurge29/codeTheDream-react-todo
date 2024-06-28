import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import "../App.css"

const TodoList = ({ todoList, onRemoveTodo }) => {
    return (
        <div>
            <ul className="box content">
                {todoList.map((todo) => {
                    return <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
                })}
            </ul>
        </div>
    );
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

export default TodoList;