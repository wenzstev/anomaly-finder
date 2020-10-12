import React, {useState, useEffect} from "react"

import AnomalyLog from "./AnomalyLog"

const MAX_DESC_CHARS = 1000

const AnomalyLogController = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")


  return (
    <AnomalyLog
      nameValue={name}
      descValue={desc}
      charsLeft = {MAX_DESC_CHARS - desc.length}
      changeName={(e)=>setName(e.target.value)}
      changeDesc={(e)=>setDesc(e.target.value)}
      />
  )
}

export default AnomalyLogController
