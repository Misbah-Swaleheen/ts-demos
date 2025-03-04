import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos((todos) => {
      return todos.concat({
        id: Math.floor(Math.random() * 10),
        text: input,
      });
    });
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Todo"
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <h1>Todo List</h1>
      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            <span>{text}</span> &nbsp; &nbsp;
            <button onClick={() => removeTodo(id)}> x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
