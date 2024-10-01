/* eslint-disable react/prop-types */
export default function TodoCard({
  children,
  todoIndex,
  handleDeleteTodo,
  handleEditTodo,
}) {
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button onClick={() => handleEditTodo(todoIndex)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => handleDeleteTodo(todoIndex)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </div>
  );
}
