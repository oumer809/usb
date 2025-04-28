import React, {  useState } from "react";
import { Todo } from "../src/types";

const TodoList: React.FC = () => {
    const [todos, setTodos] =useState<Todo[]>([]);
    const [inputValue, setInputValue] =useState<string>('');  
    
    const addTodo = ()=> {
        
        if (inputValue.trim()=== '') {
            return;
        };
        const newTodo: Todo ={
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
    }

  const toggleTodo = (id: Number)=> {
    setTodos(todos.map(todo=>todo.id === id? {...todo, completed: !todo.completed } : todo))
  }
  const deleteTodo =(id: number)=> {
    setTodos(todos.filter((todo)=> todo.id !== id ));
  }
  return (
    <div className="max-w-md  mx-auto ">
      <div className="bg-gray-100/40 rounded-md px-3 py-5 max-w-1/2">
        <h1 className="text-3xl  font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-purple-800">Todo List</h1>
        <div className="flex mb-4">
          <input type="text" className="border border-gray-300 rounded-1 px-4 py-2 flex-grow" placeholder="Add a new task " value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
          <button onClick={addTodo} className="bg-blue-500 rounded-r text-white px-4 py-2">Add</button>
        </div>
        <ul>
          {todos.map((todo)=> (
              <li key={todo.id} className="flex justify-between items-center p-1 border-b ">
                <span onClick={() => toggleTodo(todo.id)} className={`cursor-pointer bg-gray-100 px-3 py-2 rounded-lg ${todo.completed ? "line-through text-gray-700" : ""}`}>{todo.text}</span><button onClick={() => deleteTodo(todo.id)} className="text-red-500 bg-white px-2 rounded-lg font-semibold  p-2 ">Delete</button>
              </li>
          
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList