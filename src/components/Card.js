import React from 'react'
import './Card.css';

function Card({name,image,score}) {
  return (
    <div className='card'>
        <img src={image} alt={name??"NA"} />
        <div className='card__content'>
            <p>{name??"NA"}</p>
            <div className="score">{score.toPrecision(2)}</div>
        </div>
    </div>
  )
}

export default Card