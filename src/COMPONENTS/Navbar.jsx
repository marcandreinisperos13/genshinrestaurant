import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className="logo">
                <img src="yaemiko1.png" alt="" />
            </div>

            <div className="links">
                <Link to='/genshinrestaurant/'>Home</Link>
                <Link to='/genshinrestaurant/about'>About</Link>
                <Link to='/genshinrestaurant/product'>Product</Link>
                <Link to='/genshinrestaurant/order'>Order</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar