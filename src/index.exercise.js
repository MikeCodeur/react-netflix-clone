import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App'
import reportWebVitals from './reportWebVitals'
//🐶 importe le composant <Profiler/>

const root = ReactDOM.createRoot(document.getElementById('root')) // Use createRoot
root.render(
  <React.StrictMode>
    {/* 🐶 Wrappe 'App' avec <React.Profiler onRender={(...args) => console.log(...args)} > 
        dans un premier temps pour tester*/}

    {/* 🐶 Ensuite Wrappe 'App' avec le composant Profiler */}
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
