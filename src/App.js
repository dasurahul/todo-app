import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      setError(true);
      return;
    }
    const item = {
      id: new Date().getTime(),
      name: input,
    };
    setItems((items) => [...items, item]);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={input} onChange={inputHandler} />
        <button type="submit">Add</button>
      </form>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default App;
