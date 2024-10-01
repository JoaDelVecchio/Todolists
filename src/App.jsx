import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    persistData(newTodos);
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodos);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setNewTodo(todos[index]);
    handleDeleteTodo(index);
  };

  const persistData = (newList) => {
    localStorage.setItem("todoList", JSON.stringify({ todos: newList }));
  };

  useEffect(() => {
    if (!localStorage) return;
    const localTodo = localStorage.getItem("todoList");
    if (!localTodo) return;
    setTodos(JSON.parse(localTodo).todos);
  }, []);

  return (
    <>
      <TodoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
