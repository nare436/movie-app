import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { MovieProvider } from './context/MovieContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieProvider>
  </StrictMode>,
)
