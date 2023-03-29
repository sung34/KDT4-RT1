import React, { useEffect, useState } from 'react'
import AreaFilter from '@/components/AreaFilter'
import CardContainer from '@/components/CardContainer'
import instance from '@/apis/axios'

function AllArea() {
  const fetchStationData = async args => {
    const res = await instance.get('/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {
      params: {
        ...args,
      }
    })
    return res.data.response.body.items
  }

  const [sido, setSido] = useState("서울")
  const [station, setStation] = useState("")
  const [stationData, setStationData] = useState([])

  useEffect(() => {
    async function fetchAndSetStationData() {
      const data = await fetchStationData({ sidoName: sido })
      setStationData(data)
    }

    fetchAndSetStationData()
  }, [sido])


  return (
    <>

      <AreaFilter
        isSidoOnly={ true }
        locationState={{
          sido,
          setSido,
          station,
          setStation,
          stationData
        }}
      />
      <CardContainer stationData={ stationData } />
    </>
  )
}

export default AllArea
