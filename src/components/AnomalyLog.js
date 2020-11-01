import React, {useState} from "react"
import styled from "styled-components"

import {StyledButton, StyledForm} from "./ReusableStylings"




const WrapperDiv = styled.div
`
  width: 100%;
`

const AnomalyLog = (props) => {
  return (
    <div>
      <h3>Log Anomaly</h3>
      <StyledForm>
        <label>
            Anomaly Name
          <div className="form-input">
            <input value={props.nameValue} onChange={props.changeName}/>
          </div>
        </label>
        <label>
          <p>
            Description of Anomaly
            {props.charsLeft < 200 ? <span style={{color:"red"}}>{props.charsLeft}</span> : null}
          </p>
          <textarea value={props.descValue} onChange={props.changeDesc}/>
        </label>
        <StyledButton
          style={{display:"block", textAlign:"center"}}
          onClick={props.postNewAnomaly}>Submit Log</StyledButton>
      </StyledForm>
    </div>
  )
}

export default AnomalyLog
