import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Fav from './pages/Fav'
import Nav from './comopnents/Nav'
function App() {
  return (
    <>
    <Nav></Nav>
      <main className='overflow-hidden'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/fav' element={<Fav />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
