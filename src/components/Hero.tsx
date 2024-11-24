import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className='hero'>
      <div className="img-dev">
      <img src="images/9.jpg" alt="hero" width={200} height={200} className='img'/>
        </div>
        <div className='info-dev'>
            <h1 className='name'>Hello <br />I am <br /> Shabbir Ali</h1>
            <div className='btn2'>
                <button className='bt1'><Link href="/" className='bt-li'>About Me</Link></button>
                <button className='bt1'><Link href="/contact" className='bt-li'>Contact Me</Link></button>
            </div> 
      </div>
    </div>
  )
}

export default Hero
