import React from 'react'
import { AppBar, Toolbar } from '@mui/material'

function Navbar() {
  return (
      <AppBar>
          <Toolbar className='flex items-center justify-center gap-10'>
              <p className=" font-sans"><a href='/'>Home</a></p>
              <p className='font-sans'><a href='/addcontact'>Add Contact</a></p>
              <p className='font-sans'><a href='/allcontact'>All Contact</a></p>
          </Toolbar>
      </AppBar>
  )
}

export default Navbar
