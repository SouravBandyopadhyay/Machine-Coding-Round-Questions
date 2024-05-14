import { useRef, useState } from "react";
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
  const [editText, setEditText] = useState("");
  return (
    <div className="todoItem" key={id} style={{ border: "2px solid red" }}>
      <div class="circle" onClick={() => updatedCompleted(id)}>
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div> {completed ? <s>{name}</s> : <p>{name}</p>}</div>
      <div class="close" onClick={() => deleteTodo(id)}>
        X
      </div>
    </div>
  );
};

function App() {
  const [todo, setTodo] = useState([
    { name: "hello", completed: false, id: 1 },
  ]);
  const inputRef = useRef();

  // ADD ITEM
  const handleChange = (elem) => {
    setTodo([
      ...todo,
      { name: elem.target.value, id: Date.now(), completed: false },
    ]);

    // To clear the input box after adding
    inputRef.current.value = "";
  };

  // Toggle Completed
  const handleCompleted = (id) => {
    const updatedList = todo.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    setTodo(updatedList);
  };

  const handleDelete = (id) => {
    const filter = todo.filter(el.id !== id);
    setTodo(filter);
  };

  const handleUpdateText = (id) => {
    const updatedText = todo.map((el) => {
      if (el.id === id) {
        el.text = text;
      }
      return el;
    });
    setTodo(updatedText);
  };
  return (
    <div className="App">
      <div>
        <label htmlFor="todoInput"></label>
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          placeholder="Add Todo"
          onKeyDown={(elem) => {
            if (elem.key === "Enter") {
              handleChange(elem);
            }
          }}
          ref={inputRef}
        />
      </div>
      {/* todos UI */}
      {todo.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
          updatedCompleted={handleCompleted}
          deleteTodo={handleDelete}
          updateTodo={handleUpdateText}
        />
      ))}
    </div>
  );
}

export default App;
