import React, {useState, useEffect} from "react"
import AnomalyDisplay from "./AnomalyDisplay"

const axios = require('axios')

const AnomalyDisplayController = () => {

  useEffect(()=>{
    const getAnomalyInfo = async(id) => {
      const anomalyResponse = await axios.get(`/api/anomalies`)
      console.log(anomalyResponse)

    }
    getAnomalyInfo("1")
  }, [])

  return (
    <AnomalyDisplay

      />
  )
}

export default AnomalyDisplayController
