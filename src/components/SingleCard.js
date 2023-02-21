import React from 'react'
import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" src={card.src} alt="card front"></img>
        <img
          className="back"
          src="/img/Pokeball.png"
          onClick={handleClick}
          alt="card back"
        ></img>
      </div>
    </div>
  )
}

export default SingleCard
