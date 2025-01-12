import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="logo">
                <img src="yaemiko1.png" alt="" />
                <h2>Genshin Impact Restaurant</h2>
            </div>

            <div className="links">
                <div className="social-media">
                    <h5>Follow Us</h5>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTiktok} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>

                <div className="how-to-order">
                    <h5>How To Order</h5>
                    <Link to='/genshinrestaurant/order'>Order Here</Link>
                </div>

                <div className="about-us">
                    <h5>About Us</h5>
                    <Link to='/genshinrestaurant/about'>About Genshin Impact Restaurant</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer