import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 '>
        <div className='flex'>
            
            <img src=" https://static.vecteezy.com/system/resources/previews/026/174/780/original/blog-icon-speech-icon-in-flat-design-on-white-background-vector.jpg" className='h-24'/>
        </div>
        <div>
            <ul className=' flex list-none space-x-5 text-lg font-serif '>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header