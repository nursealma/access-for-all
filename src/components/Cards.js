import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Resources for Web Accessiblity Compliance:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='../images/image-2.png' text="Color Contrast Checker" path={{pathname: 'https://contrastchecker.com/'}} />
                        <CardItem 
                        src='../images/image-3.png' text="Web Accessibility Checker" path={{pathname: 'https://achecker.ca/checker/index.php'}} />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='../images/image-4.png' text="Wave Evaluation Tool" path={{pathname: 'https://wave.webaim.org/'}} />
                        <CardItem 
                        src='../images/image-5.png' text="Lighthouse Node Module" path={{pathname: 'https://developers.google.com/web/tools/lighthouse/#devtools'}} />
                        <CardItem 
                        src='../images/image-6.png' text="Axe Chrome Extension" path={{pathname: 'https://www.deque.com/axe/'}} />

                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Cards
