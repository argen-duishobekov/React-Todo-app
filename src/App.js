import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp"

function App() {
  return (
    <div className="App">
      <h1 className="title">Todo List</h1> <br/>

      <TodoApp/>
    </div>
  );
}

export default App;
