import React, {useState, useEffect} from "react"

import AnomalyLog from "./AnomalyLog"
import axios from "../AxiosConfig"
import {StyledButton} from "./ReusableStylings"


const AnomalyLogController = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [postedId, setPostedId] = useState(-1)

  const postNewAnomaly = async(values) => {
    const newAnomaly = await axios.post(`/api/anomalies`,{
      title: values.name,
      body: values.description
    })
    setPostedId(newAnomaly.data.id_)
  }


  return (
    <>
    {postedId > 1?
      <>
      <h3>Anomaly Submitted</h3>
      <p>Thank you, your log has been submitted for review. If deemed suitable, it will be entered in the logs as Anomaly #{postedId}</p>
      <StyledButton centered onClick={()=>setPostedId(-1)}>Submit New Log</StyledButton>
      </>
  : (
      <AnomalyLog
        nameValue={name}
        descValue={desc}
        changeName={(e)=>setName(e.target.value)}
        changeDesc={(e)=>setDesc(e.target.value)}
        postNewAnomaly={postNewAnomaly}
        />
    )}
    </>

  )
}

export default AnomalyLogController
