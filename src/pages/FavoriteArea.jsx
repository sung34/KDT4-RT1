import React from 'react'
import CardContainer from '@/components/CardContainer'
import stationArray from '@/constants/data.js'

function FavoriteArea() {
  return (
    <>
      <CardContainer stationList={stationArray} />
    </>
  )
}

export default FavoriteArea