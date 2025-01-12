import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../COMPONENTS/Navbar'
import Footer from '../COMPONENTS/Footer'

const Home = () => {
    return (
        <div className='homepage'>
            <Navbar />

            <header>
                <div className="text-block">
                    <h1>Ad Astra Abyssosque Traveler!</h1>
                    <h3>Teyvat Finest Online Restaurant</h3>
                    <Link to='/genshinrestaurant/product'>Order Now</Link>
                </div>

                <div className="image-block">
                    <div className="card">
                        <div className="card-image">
                            <img src="ASSETS/SPECIALDISH/venti.webp" alt="" />
                        </div>

                        <div className="card-text">
                            <h2>Venti's Special Dish</h2>
                            <p>Mondstadt's Archon</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="featured-dish">
                <h1>Region's Best Special Dish</h1>

                <div className="card-block">
                    <div className="card">
                        <h3>Mondstadt</h3>

                        <div className="dish">
                            <img src="ASSETS/SPECIALDISH/amber.webp" alt="" />
                            <p>Amber Special Dish</p>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Liyue</h3>

                        <div className="dish">
                            <img src="ASSETS/SPECIALDISH/hutao.webp" alt="" />
                            <p>Hu Tao Special Dish</p>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Inazuma</h3>

                        <div className="dish">
                            <img src="ASSETS/SPECIALDISH/yaemiko.webp" alt="" />
                            <p>Yae Miko Special Dish</p>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Sumeru</h3>

                        <div className="dish">
                            <img src="ASSETS/SPECIALDISH/nahida.webp" alt="" />
                            <p>Nahida Special Dish</p>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Fontaine</h3>

                        <div className="dish">
                            <img src="ASSETS/SPECIALDISH/furina.webp" alt="" />
                            <p>Furina Special Dish</p>
                        </div>
                    </div>
                    <div className="card">
                        <h3>Natlan</h3>

                        <div className="dish">
                            <img src="ASSETS/SPECIALDISH/citlali.webp" alt="" />
                            <p>Citlali Special Dish</p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Home