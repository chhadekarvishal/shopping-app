import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import { products } from '../Data/Products';
import Product from './Product';
import "./style.css"

function Home() {
    const {state} = CartState();
    console.log(state);
  return (
    <div className='home'>
      <Filter></Filter>
      <div className='productContainer'>
        { products.map(prod =>{
          return <Product prod={prod} key={prod.id}></Product>
        })}
      </div>
    </div>
  )
}

export default Home
