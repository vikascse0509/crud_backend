import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editInput, setEditInput] = useState(null);

  const handleAddInput = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput(""); // Clear the input after adding
    }
  };

  const handleDeleteInput = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  const handleEditInput = (i) => {
    setTodoInput(todos[i]);
    setEditInput(i);
  };

  const handleUpdate = () => {
    if (todoInput.trim() && editInput !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editInput] = todoInput;
      setTodos(updatedTodos);
      setEditInput(null);
      setTodoInput(""); // Clear the input after updating
    }
  };

  return (
    <div className="p-6 bg-gray-100 m-9 flex flex-col items-center">
      <h2 className="text-2xl mb-4 font-bold">List of Tasks</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          value={todoInput} // Controlled input with value linked to todoInput state
          placeholder="Enter your tasks"
          className="border p-2 rounded w-72"
          onChange={(e) => setTodoInput(e.target.value)} // Update todoInput state on change
        />
        {editInput === null ? (
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={handleAddInput} // Add task
          >
            Add
          </button>
        ) : (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleUpdate} // Update task
          >
            Update
          </button>
        )}
      </div>
      <ul className="w-[400px] mt-3">
        {todos.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
          >
            {task}
            <div className="space-x-2">
              <button
                onClick={() => handleDeleteInput(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditInput(index)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
