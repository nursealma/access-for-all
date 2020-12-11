import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Access For All</h1>
            <div className="hero-btns">
                <Button className='btns'>Information</Button>
            </div>         
        </div>  
    )
}
export default HeroSection