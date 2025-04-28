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
  const deleteTodo =(id: number)=> {
    setTodos(todos.filter((todo)=> todo.id !== id ));
  }
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-8 text-center">Todo List</h1>
      <div className="flex mb-4">
        <input type="text" className="border border-gray-300 rounded-1 px-4 py-2 flex-grow" placeholder="Add a new task " value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={addTodo} className="bg-blue-500 rounded-r text-white px-4 py-2">Add</button>
      </div>
      <ul>
        {todos.map((todo)=> (
          <li key={todo.id} className="flex justify-between items-center p-1 border-b ">
            <span className="text-gray-500">{todo.text}</span>
            <button onClick={()=> deleteTodo(todo.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList