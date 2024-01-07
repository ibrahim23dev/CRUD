import React from 'react'
import { AppBar, Toolbar,styled } from '@mui/material'

const Tabs = styled('p')`
font-size:20px;
margin-right:20px;

`
function Navbar() {
  return (
      <AppBar>
          <Toolbar>
              <Tabs>Home</Tabs>
              <Tabs>Add Contact</Tabs>
              <Tabs>All Contact</Tabs>
          </Toolbar>
      </AppBar>
  )
}

export default Navbar
