import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyEgBTJ1Nzq0wLP9SPGEnESM1olkF0ZB0QEwZNWNAOg&s=10" alt="No Image" className='Navlogo'/>
        <ul className="Navlinks">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#location">Location</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
        <button className='Butt1'>Login</button>
    </div>
  )
}

export default Navbar
