import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  const [nombor, setNombor] = useState(10)
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA nombor={nombor}/>
      <ComponentB/>
      <Banner/>
      <h1>Vite + React</h1>
      <div className="card">
        {/*below is an example of styling in jsx*/}
        <button style={{backgroundColor: "red", border: "2px solid green"}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
