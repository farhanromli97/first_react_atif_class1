import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
  const [nombor, setNombor] = useState(10)
  const [count, setCount] = useState(0)


  const handleCount = () => {
    setCount(count + 1)
  }

  const handleNombor = (num) => {
    setNombor(nombor + num)
  }  



  

  return (
    <>
      <ComponentA staticNumber={20}/>
      <ComponentB number={nombor} func={handleNombor} />
      <h2>Count: {nombor}</h2>
      <ComponentC objekSaya={{
        nama: "Farhan",
        umur: 26
      }}/>

      <Banner/>
      
      <h1>Vite + React</h1>
      <div className="card">
        {/*below is an example of styling in jsx*/}
        <button style={{backgroundColor: "red", border: "2px solid green"}} onClick={handleCount}>
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
