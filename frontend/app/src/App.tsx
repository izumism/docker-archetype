import React, { useReducer } from 'react';
import './App.css';

type Todo = {
  id: string,
  task: string,
  complete: boolean,
};

type Action = {
  type: 'DO_TODO' | 'UNDO_TODO';
  id: string;
};

const initialTodos: Todo[] = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
];

const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map((todo) => (
        todo.id === action.id ? { ...todo, complete: true } : todo));
    case 'UNDO_TODO':
      return state.map((todo) => (
        todo.id === action.id ? { ...todo, complete: false } : todo));
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(
    todoReducer,
    initialTodos,
  );

  const handleChange = (todo: Todo) => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <label htmlFor={todo.id}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default App;
