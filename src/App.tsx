import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fetchresult, setFetchResult] = useState("None")

  async function getExampleHTML() {
    const result = await fetch("http://example.com")
      .then(res => {
        return res.text();
      })
      .catch(error => {
        console.log(error)
        return `${error.name} ${error.message}`;
      })

    setFetchResult(result)
  }


  useEffect(() => {
    getExampleHTML();
  }, [])


  return (
    <div>
      <h1>Example.com</h1>
      <h2>Result: {fetchresult} </h2>
    </div>
  )
}

export default App
