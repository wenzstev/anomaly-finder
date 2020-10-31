import React, {useState, useEffect} from "react"
import AnomalyDisplay from "./AnomalyDisplay"

import axios from "../AxiosConfig"

const AnomalyDisplayController = () => {
  const [anomaly, setAnomaly] = useState({})
  const [isSaved, setIsSaved] = useState(false)

  useEffect(()=>{
    const getAnomalyInfo = async(id) => {
      const anomalyResponse = await axios.get(`/api/anomalies?random=true`)
      setAnomaly(anomalyResponse.data[0])
      const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
      console.log(savedAnomalies)
      setIsSaved(savedAnomalies.includes(anomalyResponse.data[0].id_))
    }
    getAnomalyInfo("1")
  }, [])

  const saveAnomaly = (id) => {
    const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
    localStorage.setItem('savedAnomalies', JSON.stringify([...savedAnomalies, id]))
    setIsSaved(true)
  }

  const removeSaved = (id) => {
    const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
    const newSavedAnomalies = [...savedAnomalies]
    newSavedAnomalies.splice(savedAnomalies.indexOf(id), 1)
    localStorage.setItem('savedAnomalies', JSON.stringify(newSavedAnomalies))
    setIsSaved(false)
  }

  return (
    <AnomalyDisplay
      anomaly={anomaly}
      saveAnomaly = {()=>saveAnomaly(anomaly.id_)}
      removeSaved = {()=>removeSaved(anomaly.id_)}
      isSaved={isSaved}
      />
  )
}

export default AnomalyDisplayController
