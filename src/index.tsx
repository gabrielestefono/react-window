// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import Table from './components/Table'

const App = () => (
  <React.StrictMode>
    <Table />
  </React.StrictMode>
)

const rootElement = document.querySelector('main')
if (rootElement) {
  ReactDOM.render(<App />, rootElement)
}
