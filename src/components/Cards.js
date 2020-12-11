import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import secondImage from '../images/image-2.png'
import thirdImage from '../images/image-3.png'
import fourthImage from '../images/image-4.png'
import fifthImage from '../images/image-5.png'
import sixthImage from '../images/image-6.png'

function Cards() {
    return (
        <div className='cards'>
            <h1>Resources for Web Accessiblity Compliance:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={secondImage} text="Color Contrast Checker" path={{pathname: 'https://contrastchecker.com/'}} />
                        <CardItem 
                        src={thirdImage} text="Web Accessibility Checker" path={{pathname: 'https://achecker.ca/checker/index.php'}} />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={fourthImage} text="Wave Evaluation Tool" path={{pathname: 'https://wave.webaim.org/'}} />
                        <CardItem 
                        src={fifthImage} text="Lighthouse Node Module" path={{pathname: 'https://developers.google.com/web/tools/lighthouse/#devtools'}} />
                        <CardItem 
                        src={sixthImage} text="Axe Chrome Extension" path={{pathname: 'https://www.deque.com/axe/'}} />
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Cards
