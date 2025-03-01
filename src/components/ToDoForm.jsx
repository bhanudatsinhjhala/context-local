import { useState } from 'react';
import { useToDoContext } from '../context/ToDoContext';

function TodoForm() {
  const [todoMsg, setTodoMsg] = useState('');

  const { addToDo } = useToDoContext();

  const add = (e) => {
    e.preventDefault();
    addToDo({ name: todoMsg });
    setTodoMsg('');
  };
  return (
    <form className="flex">
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={(event) => add(event)}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
