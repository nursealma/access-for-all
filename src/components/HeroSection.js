import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom'



function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Access For All</h1>
            <div className="hero-btns">
            <Link to="/info" className='btn-mobile'>
                <button className='btn' >
                    Information
                </button>
            </Link>
            </div>         
        </div>  
    )
}
export default HeroSection