import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div id='home' className='Homepage'>
        <div className='Leftside'>
            <h1 className='homehea'>Welcome To Vegetarian Restaurant</h1>
            <p className='homepara'> we believe that vegetarian dining should be an extraordinary culinary adventure. Our passion is crafting vibrant, flavor-packed dishes that celebrate the very best of nature's bounty. Whether you are a lifelong vegetarian, a dedicated vegan, or simply curious about plant-based eating, our kitchen welcome you with open arms and an inspiring menu.</p>
            <button className='butt2'>Order Now</button>
        </div>
        <div className='Rightside'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmmsO_FUyUzrV3wF1Qmjqfl3ARO4GKknbtdJ0jUS4H-w&s=10" alt="No Image" className='homeimg'/>
        </div>
    </div>
      </>
  )
}

export default Home