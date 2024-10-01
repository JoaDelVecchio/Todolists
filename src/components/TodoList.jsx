/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard {...props} key={todoIndex} todoIndex={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
