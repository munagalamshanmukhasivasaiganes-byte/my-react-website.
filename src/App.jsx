import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Location from './Components/Location'
import Contact from './Components/Contact'
import Products from './Components/Products'
import "./App.css"

const productsdetails = {
  imageurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3EP3Mn-BS8C_El692Wn15smG67h0dgcBZ81sXHeU0w&s=10" ,
  name : "Dosa" ,
  para : "Dosa with some carrot and onion pieces" ,
  price : "40 Rs"
}

const App = () => {
  return (
    <div>
      <Navbar/>
      <section id="home"><Home /></section>
<section id="about"><About /></section>
<section id="location"><Location /></section>
<section id="contact"><Contact /></section>
    </div>
  )
}

export default App
