import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["clean", "run", "study", "fight"]);

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
}

export default App;
