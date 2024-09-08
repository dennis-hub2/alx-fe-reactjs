// src/App.jsx
import React from 'react';
import TodoList from './components/TodoList'; // Import TodoList

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList /> {/* Use TodoList */}
    </div>
  );
};

export default App;
