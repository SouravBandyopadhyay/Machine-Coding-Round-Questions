import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
      setInputText("");
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add todo..."
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAddTodo();
        }}
      />
      {todos.map((todo) => (
        <div key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleComplete(todo.id)}
          />
          <div
            className="todo-text"
            contentEditable={!todo.completed}
            suppressContentEditableWarning={true}
            onBlur={(e) => handleEditTodo(todo.id, e.target.innerText)}
          >
            {todo.text}
          </div>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
