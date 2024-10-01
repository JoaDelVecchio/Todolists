/* eslint-disable react/prop-types */

export default function TodoInput({ handleAddTodo, newTodo, setNewTodo }) {
  return (
    <div className="todolistInput">
      <input
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodo(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}
