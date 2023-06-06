import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

function Card({name,image,score,summary}) {
  return (
    <Link to={"/summary"} state={{ name: name,image:image,summary:summary }}>
        <div className='card'>
        <img src={image} alt={name??"NA"} />
        <div className='card__content'>
            <p>{name??"NA"}</p>
            <div className="score">{score.toPrecision(2)}</div>
        </div>
    </div>
    </Link>
  )
}

export default Card