import React from "react"
import TodoList from "./TodoList"


const App: React.FC = () => {
  return (
    <div style={{ backgroundImage:"url('/src/assets/nature09.jpeg')"}} className=" bg-cover h-screen py-48 ">
      <TodoList />
    </div>
  )
}

export default App