import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'


export const Navbar = () => {
  return (
    <>
    <div className='navdiv'>
         <Link to='/history1'><h3 className='his'>01. History</h3></Link>
         <Link to='/home'><h3 className='his'>02. Team</h3></Link>
    </div>
    </>
  )
}
