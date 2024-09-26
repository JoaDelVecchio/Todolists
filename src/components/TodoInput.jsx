/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

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
