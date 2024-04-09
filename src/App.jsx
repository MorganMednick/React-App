import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoItem from './ToDoItem'

function App() {
  //const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([]); 
  //Returns an object containing a variable, and a function.
  //Whenever we change todos using setTodos, it'll re-render anything depending on SetTodos.

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Subjecto Directo</h1>
      <ToDoItem text="Do important things" id="fjudfjmss"/>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
