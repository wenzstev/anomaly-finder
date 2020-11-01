import React, {useState, useEffect} from "react"
import AnomalyDisplay from "./AnomalyDisplay"
import AnomalyFinder from "./AnomalyFinder"

import axios from "../AxiosConfig"

const AnomalyDisplayController = () => {
  const [id, setId] = useState("")
  const [anomaly, setAnomaly] = useState(null)
  const [isSaved, setIsSaved] = useState(false)

  useEffect(()=>{
    if(anomaly !== null){
      setId(anomaly.id_)
    }
  }, [anomaly])

  const checkIsSaved = (id) => {
    const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
    return savedAnomalies.includes(id)
  }

  const getRandomAnomaly = async() => {
    const anomalyResponse = await axios.get(`/api/anomalies?random=true`)
    setAnomaly(anomalyResponse.data[0])
    setIsSaved(checkIsSaved(anomalyResponse.data[0].id_))
  }

  const getAnomaly = async(id) => {
    try {
      var anomalyResponse = await axios.get(`/api/anomalies/${id}`)
    } catch {
      console.log("doesn't exist")
      return false
    }
    setAnomaly(anomalyResponse.data)
    setIsSaved(checkIsSaved(anomalyResponse.data.id_))
  }



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

  console.log(id)

  const display = anomaly ? (
      <AnomalyDisplay
        anomaly={anomaly}
        saveAnomaly = {()=>saveAnomaly(anomaly.id_)}
        removeSaved = {()=>removeSaved(anomaly.id_)}
        isSaved={isSaved}
        />
    ) : (
      <AnomalyFinder
        id={id}
        changeId={(e)=>setId(e.target.value)}
        getRandomAnomaly={getRandomAnomaly}
        setId={()=>getAnomaly(id)}
        />
    )

  return display
}

export default AnomalyDisplayController
