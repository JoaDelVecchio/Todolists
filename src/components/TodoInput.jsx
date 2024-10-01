/* eslint-disable react/prop-types */

export default function TodoInput({ handleAddTodo, newTodo, setNewTodo }) {
  return (
    <header>
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
    </header>
  );
}
