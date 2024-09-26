/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

export default function TodoList({ todos }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <TodoCard key={todoIndex}>
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
