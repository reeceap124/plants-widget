import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Hey</h1>
      <Link to="/plants">Home</Link>
      <Link to="/plants/1">About</Link>
      <Routes>
        <Route path="/plants" element={<Home />} />
        <Route path="/plants/:id" element={<About />} />
      </Routes>
    </div>
  )
}
function Home() {
  return (
    <>
      <h2>Hello</h2>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

function About() {
  return (
    <>
      <h3>Third</h3>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}

export default App
