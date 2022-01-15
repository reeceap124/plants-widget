import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

const init = (roots) => {
  return roots.map((root) => {
    return ReactDOM.render(
      <React.StrictMode>
        <Router>
          <App domElement={root} />
        </Router>
      </React.StrictMode>,
      root
    )
  })
}

const embed = Array.from(document.getElementsByClassName('plantsManagerEmbed'))
console.log('embed:', embed)
if (embed) {
  init(embed)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals()
