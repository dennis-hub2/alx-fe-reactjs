// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For the custom matchers
import TodoList from '../components/TodoList'; // Adjust path if necessary


test('renders initial todos', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  expect(todoItem).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const button = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  const newTodo = screen.getByText('New Task');
  expect(newTodo).toBeInTheDocument();
});
