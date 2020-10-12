import React from "react"
import styled from "styled-components"

const StyledDisplay = styled.div
`
  font-family: Courier;
  color: white;

`

const StyledTitle = styled.div
`
  display: flex;
  align-items: center;
`

const StyledScore = styled.button
`
  margin: 2rem;
  font-size: 2rem;
  font-family: inherit;
  color: inherit;
  background: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
`

const ScorePanel = () => <StyledScore>23</StyledScore>

const AnomalyDisplay = () => {
  return (
    <StyledDisplay>
    <h3> Anomaly #213</h3>
      <StyledTitle>
        <ScorePanel />
        <h1>Anomaly Name</h1>
      </StyledTitle>
    <p>This is an anomaly!</p>
    </StyledDisplay>
  )
}

export default AnomalyDisplay
