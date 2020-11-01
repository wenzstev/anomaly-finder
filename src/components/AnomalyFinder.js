import React from "react"
import styled from "styled-components"
import {StyledButton, StyledForm} from "./ReusableStylings"

const AnomalyFinder = (props) => {
  return (
    <div>
      <h3>Anomaly Finder</h3>
      <p>Enter the identification number of the anomaly you wish to find below, or allow a random anomaly to be chosen for you.</p>
      <StyledForm>
        <input style={{marginLeft:"1rem"}} value={props.id} onChange={props.changeId}/>
        <StyledButton
          onClick={props.setId}
          type="button"
          style={{marginLeft: "1rem"}}>Find Anomaly</StyledButton>
        <StyledButton
          onClick={props.getRandomAnomaly}
          type="button" style={{marginLeft:"1rem"}}>
          Random Anomaly
        </StyledButton>
      </StyledForm>
    </div>
  )
}

export default AnomalyFinder
