import React, {useState, useEffect} from "react"
import AnomalyDisplay from "./AnomalyDisplay"
import AnomalyFinder from "./AnomalyFinder"
import SavedAnomalies from "./SavedAnomalies"

import axios from "../AxiosConfig"

const AnomalyDisplayController = () => {
  const [anomaly, setAnomaly] = useState(null)
  const [isSaved, setIsSaved] = useState(false)
  const [isListOpen, setIsListOpen] = useState(false)

  const checkIsSaved = (id) => {
    const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
    return savedAnomalies.includes(id)
  }

  const checkIsVoted = (id) => {
    console.log(id)
    const votedAnomalies = JSON.parse(localStorage.getItem('votedAnomalies'))
    console.log(votedAnomalies)
    return votedAnomalies.includes(id)
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

  const saveAnomalyToLocalStorage = (id) => {
    const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
    localStorage.setItem('savedAnomalies', JSON.stringify([...savedAnomalies, id]))
  }


  const saveVotedToLocalStorage = (id) => {
    const votedAnomalies = JSON.parse(localStorage.getItem('votedAnomalies'))
    localStorage.setItem('votedAnomalies', JSON.stringify([...votedAnomalies, id]))
  }

  const removeVotedFromLocalStorage = (id) => {
    const votedAnomalies = JSON.parse(localStorage.getItem('votedAnomalies'))
    const newVotedAnomalies = [...votedAnomalies]
    newVotedAnomalies.splice(votedAnomalies.indexOf(id, 1))
    localStorage.setItem('votedAnomalies', JSON.stringify(newVotedAnomalies))
  }

  const saveAnomaly = async(id) => {
    saveAnomalyToLocalStorage(id)
    setIsSaved(true)
    if (!checkIsVoted(id)) {
      const addVote = await axios.put(`/api/anomalies/${id}/vote`, {"increment": 1})
      saveVotedToLocalStorage(id)
      getAnomaly(id)
    }
  }

  const removeSaved = (id) => {
    const savedAnomalies = JSON.parse(localStorage.getItem('savedAnomalies'))
    const newSavedAnomalies = [...savedAnomalies]
    newSavedAnomalies.splice(savedAnomalies.indexOf(id), 1)
    localStorage.setItem('savedAnomalies', JSON.stringify(newSavedAnomalies))
    setIsSaved(false)
  }

  const vote = async(id) => {
    if(!checkIsVoted(id)){
      const addVote = await axios.put(`/api/anomalies/${id}/vote`, {"increment": 1})
      saveVotedToLocalStorage(id)
    } else {
      const removeVote = await axios.put(`/api/anomalies/${id}/vote`, {"increment": -1})
      removeVotedFromLocalStorage(id)
    }
    getAnomaly(id)
  }

  const loadFromSaved = (id) => {
      getAnomaly(id)
      setIsListOpen(false)
  }

  const display = isListOpen ? (
      <SavedAnomalies setId={(id)=>loadFromSaved(id)}/>
    ) : anomaly ? (
      <AnomalyDisplay
        anomaly={anomaly}
        saveAnomaly = {()=>saveAnomaly(anomaly.id_)}
        removeSaved = {()=>removeSaved(anomaly.id_)}
        getRandomAnomaly = {getRandomAnomaly}
        returnToMenu = {()=>{
          setIsListOpen(false)
          setAnomaly(null)
        }}
        isSaved={isSaved}
        vote={vote}
        />
    ) : (
      <AnomalyFinder
        getRandomAnomaly={getRandomAnomaly}
        setId={(id)=>getAnomaly(id)}
        openList = {()=>setIsListOpen(true)}
        />
    )

  return display
}

export default AnomalyDisplayController
