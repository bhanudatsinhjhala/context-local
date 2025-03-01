import React from 'react';

export const ToDoContext = React.createContext({
  todos: [
    {
      name: 'Todo msg',
      id: 1,
      completed: false,
    },
  ],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
  toggleCompleted: () => {},
});

export const useToDoContext = () => {
  return React.useContext(ToDoContext);
};

export const ToDoContextProvider = ToDoContext.Provider;
