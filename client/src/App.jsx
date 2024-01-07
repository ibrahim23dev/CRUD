import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ContactPage from './Pages/ContactPage';
import AllContact from './Pages/AllContact';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='/addcontact' element={<ContactPage />} />
          <Route path='/allcontact' element={<AllContact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
