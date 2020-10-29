import React, {useState, useEffect} from "react"
import AnomalyDisplay from "./AnomalyDisplay"

import axios from "../AxiosConfig"

const AnomalyDisplayController = () => {
  const [anomaly, setAnomaly] = useState({})

  useEffect(()=>{
    const getAnomalyInfo = async(id) => {
      const anomalyResponse = await axios.get(`/api/anomalies?random=true`)
      setAnomaly(anomalyResponse.data[0])
    }
    getAnomalyInfo("1")
  }, [])

  const saveAnomaly = (id) => {
    const savedAnomalies = localStorage.getItem('savedAnomalies')
    localStorage.setItem('savedAnomalies', {...savedAnomalies, id})
  }

  return (
    <AnomalyDisplay
      anomaly={anomaly}
      saveAnomaly = {()=>saveAnomaly(anomaly.id)}
      />
  )
}

export default AnomalyDisplayController
