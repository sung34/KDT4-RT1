import React from 'react'
import Card from './Card'

function CardContainer({ stationData }) {
  return (
    stationData ? 
      <ul>
        { stationData.map((data, index) => (
          <Card key={ index } data={ data } />
        ))}
      </ul>
    :
    null
  )
}

export default CardContainer
