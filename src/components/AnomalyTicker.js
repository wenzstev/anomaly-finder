import React from "react"
import Ticker from "react-ticker"
import styled from "styled-components"


const StyledDiv = styled.div
`
position: absolute;
top: 0;
left: 0;
width: 99%;
height: 5vh;
border: 3px solid white;
border-radius: 3px;
font-family: Courier;
color: white;
font-size: 1.5rem;
@media (max-width: 480px) {
  position: relative;
}
`

const AnomalyTicker = () => {
  return (
    <StyledDiv>
      <Ticker speed={2}>
        {({index}) => (
          <>
          <span>Anomaly #1 - Mockup </span>
          <span> | </span>
          <span>Anomaly #2 - Another Mockup </span>
          <span> | </span>
          </>
        )}
      </Ticker>
    </StyledDiv>
  )
}

export default AnomalyTicker
