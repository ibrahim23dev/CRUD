import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className='flex justify-center bg-slate-600'>
        <ul className='flex justify-center font-serif font-semibold text-white gap-11 pt-5 pb-5'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/create'>Add Contact</Link></li>
           <li><Link to='/contact'>All Contact</Link></li>
        </ul>

      </div>
    </>
  )
}

export default Navbar
