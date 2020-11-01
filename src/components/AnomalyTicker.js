import React, {useState, useEffect} from "react"
import Ticker from "react-ticker"
import styled from "styled-components"
import axios from "../AxiosConfig"

const StyledDiv = styled.div
`
position: absolute;
top: 0;
left: 0;
width: 100%;
outline: 3px solid white;
border-radius: 3px;
font-family: Courier;
color: white;
font-size: 1.5rem;
@media (max-width: 480px) {
  position: relative;
}
`


const AnomalyTicker = () => {
  const [ticks, setTicks] = useState([])

  useEffect(()=>{
    const getTicks = async(num) => {
      var mostRecent = await axios.get(`/api/anomalies?ticker=${num}`)
      setTicks(mostRecent.data)
    }
    getTicks(5)
  },[])

  const tickers = ticks.map((value, index)=>(
    `Anomaly #${value.id_}: ${value.title}`
  ))

  console.log(tickers)

  return (
    <StyledDiv>
      <Ticker offset="run-in" speed={4}>
        {()=>ticks.length > 0 ? (
            <span style={{whiteSpace:"nowrap"}}>{tickers.join("  |  ")}  |  </span>
          ):(
            <span>Loading recent anomalies...</span>
          )}
      </Ticker>
    </StyledDiv>
  )
}

export default AnomalyTicker
