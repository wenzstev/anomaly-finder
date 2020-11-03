import React, {useState, useEffect} from "react"
import {StyledButton} from "./ReusableStylings"
import axios from "../AxiosConfig"

const SavedAnomalies = (props) => {
  const [savedAnomalies, setSavedAnomalies] = useState(
    localStorage.getItem("savedAnomalies") || ""
  )

  useEffect(()=>{
    const getSavedFromBackend = async(saved) => {
      const savedResponse = await axios.get(`/api/anomalies?id=${saved.replace('[', '').replace(']', '')}`)
      console.log(savedResponse.data)
      return savedResponse.data
    }
    if (savedAnomalies != "") {
      console.log(savedAnomalies)
      console.log(JSON.parse(savedAnomalies))
      setSavedAnomalies(previous=>getSavedFromBackend(previous))
    }
  }, [])

  console.log(savedAnomalies)

  return (
    <div>
      <h3>Saved Anomalies</h3>
      {typeof savedAnomalies === "string" ? (
        <p>You currently have no saved anomalies. Search for some and save some you like to come back and read them later!</p>
      ):(
        <ul>
        {savedAnomalies.map((item)=><li>{item}</li>)}
        </ul>
      )}
    </div>
  )
}

export default SavedAnomalies
