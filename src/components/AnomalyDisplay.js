import React from "react"
import styled from "styled-components"
import {StyledButton} from "./ReusableStylings"

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

const ScorePanel = ({score}) => {
  return (
    <StyledScore>{score}</StyledScore>
  )
}

const ToggleButton = (props) => {
  return props.isSaved ? (
    <StyledButton onClick={props.removeSaved}>Anomaly Saved</StyledButton>
  ) : (
    <StyledButton onClick={props.saveAnomaly}>Save Anomaly</StyledButton>
  )
}

const AnomalyDisplay = (props) => {
  const {title, body, score, id_} = props.anomaly
  console.log(props.anomaly)
  return (
    <StyledDisplay>
    <h3> Anomaly #{id_}</h3>
      <StyledTitle>
        <ScorePanel score={score}/>
        <h1>{title}</h1>
      </StyledTitle>
    <p>{body}</p>
    <ToggleButton
      isSaved={props.isSaved} 
      removeSaved={props.removeSaved}
      saveAnomaly={props.saveAnomaly}/>
    </StyledDisplay>
  )
}

export default AnomalyDisplay
