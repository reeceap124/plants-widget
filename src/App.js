import './App.css'
import { useEffect } from 'react'
import {
  Route,
  Routes,
  Link,
  useSearchParams,
  useLocation,
  useNavigate
} from 'react-router-dom'

function App(props) {
  const user = props.domElement.getAttribute('data-user')
  const [searchParams] = useSearchParams()
  const plant = searchParams.get('plant') || null

  return (
    <div className="App">
      <h1>Hey {user}</h1>
    </div>
  )
}

export default App
