import { useEffect, useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';
import { ToDoContextProvider } from './context/ToDoContext';

function App() {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todos')));

  const addToDo = (todo) => {
    setTodo((prevToDo) => [...prevToDo, { ...todo, id: Date.now(), completed: false }]);
  };

  const updateTodo = (id, todoMsg) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.name = todoMsg;
      }
      return item;
    });
    setTodo(updatedTodo);
  };

  const removeTodo = (id) => {
    const updatedTodo = todo.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });

    setTodo(updatedTodo);
  };

  const toggleCompleted = (id) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodo(updatedTodo);
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    setTodo(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (
    <ToDoContextProvider value={{ todo, removeTodo, updateTodo, addToDo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((todo) => (
              <div key={todo?.id} className="w-full">
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
