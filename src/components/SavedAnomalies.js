import React, {useState, useEffect} from "react"
import {StyledButton} from "./ReusableStylings"
import axios from "../AxiosConfig"

const SavedAnomalyLine = ({item, setId}) => {
  return (
    <div style={{width:'95%', margin: 'auto'}}>
    <StyledButton
      fullWidth
      style={{textAlign: 'left', margin:'.25rem 0'}}
      onClick={()=>setId(item.id_)}>
      #{item.id_}: {item.title}
    </StyledButton>
    </div>
  )
}

const SavedAnomalies = (props) => {
  const [savedAnomalies, setSavedAnomalies] = useState(
    localStorage.getItem("savedAnomalies") || ""
  )

  useEffect(()=>{
    const getSavedFromBackend = async(saved) => {

      if (saved.length > 2){ // empty list would be '[]', or 2 characters
        const savedResponse = await axios.get(`/api/anomalies?id=${saved.replace('[', '').replace(']', '')}`)
        console.log(savedResponse.data)
        setSavedAnomalies(savedResponse.data)
      }
    }
    if (savedAnomalies != "") {
      console.log(savedAnomalies)
      console.log(JSON.parse(savedAnomalies))
      getSavedFromBackend(savedAnomalies)
    }
  }, [])

  console.log(savedAnomalies)

  return (
    <div>
      <h3>Saved Anomalies</h3>
      {typeof savedAnomalies === "string" ? (
        <p>You currently have no saved anomalies. Search for some and save some you like to come back and read them later!</p>
      ):(
        <div>
        {savedAnomalies.map((item, index)=><SavedAnomalyLine key={index} item={item} setId={props.setId}/>)}
        </div>
      )}
    </div>
  )
}

export default SavedAnomalies
