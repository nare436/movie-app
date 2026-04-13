import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Fav from './pages/Fav'
import Nav from './components/Nav'
function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Nav></Nav>
      <main className='min-h-screen bg-gray-900 text-white font-sans'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
