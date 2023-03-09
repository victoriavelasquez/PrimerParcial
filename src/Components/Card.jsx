import React from 'react'

const Card = ({nombre, comidaFavorita}) => {
  return (
    <div>
        <h3>{nombre} Tu comida favorita es {comidaFavorita}</h3>
    </div>
  )
}

export default Card