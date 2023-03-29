import React, { useState } from 'react'
import AreaFilter from '@/components/AreaFilter'
import CardContainer from '@/components/CardContainer'
import stationArray from '@/constants/data.js'

function MyArea() {

  const [sido, setSido] = useState("")
  return (
    <>
      {/* <AreaFilter isSidoOnly={ false } 
      myState={{
          sido,
          setSido,
        }
      } /> */}
      <CardContainer stationList={stationArray} />
    </>
  )
}

export default MyArea