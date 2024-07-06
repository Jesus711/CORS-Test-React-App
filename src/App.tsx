import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [fetchresult, setFetchResult] = useState("None")

  async function getExampleHTML() {
    const result = await fetch("/api")
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
    <div className='app'>
      <h1>Example.com</h1>
      <h2>Result: {fetchresult} </h2>
    </div>
  )
}

export default App
