import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'


function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path} target="_blank" >
                    <figure className="cards__item__pic-wrap"> 
                        <img src={props.src} className="cards__item__img" alt="article"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
