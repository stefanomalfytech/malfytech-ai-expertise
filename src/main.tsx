
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('React:', React)
console.log('createRoot:', createRoot)

const container = document.getElementById('root')
console.log('Container:', container)

if (!container) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(container)
console.log('Root created:', root)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
