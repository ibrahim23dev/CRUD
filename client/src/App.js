import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import CreatePage from './Pages/CreatePage';
import AllContactPage from './Pages/AllContactPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreatePage />} />
          <Route path='/contact' element={<AllContactPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
