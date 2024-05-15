import React, { useRef, useState } from "react";
import "./App.css";

const TodoItem = ({
  name,
  completed,
  id,
  updatedCompleted,
  deleteTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(name);

  return (
    <div className={`todoItem ${completed ? "completed" : ""}`}>
      <div className="checkbox" onClick={() => updatedCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div className="text">
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              updateTodo(id, editText);
            }}
          />
        ) : (
          <div onClick={() => setEdit(true)}>{name}</div>
        )}
      </div>
      <div className="delete" onClick={() => deleteTodo(id)}>
        X
      </div>
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([{ name: "Hello", completed: false, id: 1 }]);
  const inputRef = useRef();

  const addTodo = (event) => {
    if (event.key === "Enter") {
      const newTodo = {
        name: event.target.value.trim(),
        id: Date.now(),
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      event.target.value = "";
    }
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, name: newText } : todo))
    );
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Add Todo"
        ref={inputRef}
        onKeyDown={addTodo}
      />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          updatedCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default App;
