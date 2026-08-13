import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppAccessivel from './AppAccessivel.jsx'

const acessivel = new URLSearchParams(window.location.search).get('acessivel') === '1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {acessivel ? <AppAccessivel /> : <App />}
  </StrictMode>,
)
