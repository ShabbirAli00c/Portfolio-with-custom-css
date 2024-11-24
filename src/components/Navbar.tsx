import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <header className='nav'>
      <div className='logo'>
        <h2>Shabbir Ali</h2>
      </div>
      <div className='navigate'>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className='btn'>
        <button className='bt'>Download Cv</button>
      </div>
    </header>

    
  )
}
export default Navbar
