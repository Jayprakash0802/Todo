import { useState } from 'react'
import { TodoProvider } from './contex/todo';
import { useEffect } from 'react';
import TodoForm from './components/todoform';
import TodoItem from './components/todoitem';

// import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addtodo = (todo) => {
    setTodos((prev) => [...prev, { ...todo }])
    // console.log(todo);
  };

  const updatetodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id));
  }

  const togglecomplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo,completed:!prevtodo.completed} : prevtodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodoProvider value={{todos, addtodo, updatetodo, deletetodo, togglecomplete}}>
      <div className="bg-[#410BA5] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#390599]">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App