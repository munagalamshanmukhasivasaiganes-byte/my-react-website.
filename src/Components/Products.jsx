import React from 'react'

const Products = (props) => {
    const {productsdetails} = props 
    const {imageurl, name, para, price} = productsdetails;
  return (
    <div>
        <img src={imageurl} className='img1'/>
        <h1>{name}</h1>
        <p>{para}</p>
        <p>{price}</p>
    </div>
  )
}

export default Products