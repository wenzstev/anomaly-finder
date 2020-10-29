import React, {useState, useEffect} from "react"

import AnomalyLog from "./AnomalyLog"
import axios from "../AxiosConfig"

const MAX_DESC_CHARS = 1000

const AnomalyLogController = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const postNewAnomaly = async() => {
    const newAnomaly = await axios.post(`/api/anomalies`,{
      title: name,
      body: desc
    })

  }


  return (
    <AnomalyLog
      nameValue={name}
      descValue={desc}
      charsLeft = {MAX_DESC_CHARS - desc.length}
      changeName={(e)=>setName(e.target.value)}
      changeDesc={(e)=>setDesc(e.target.value)}
      postNewAnomaly={postNewAnomaly}
      />
  )
}

export default AnomalyLogController
