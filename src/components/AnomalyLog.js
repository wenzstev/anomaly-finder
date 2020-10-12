import React, {useState} from "react"
import styled from "styled-components"

const StyledForm = styled.form
`
  input, textarea {
    font-family: inherit;
    font-size: 1.6rem;
    color: inherit;
    border: 4px solid white;
    border-radius: 3px;
    background: inherit;
    margin: auto;
    outline: none;
    &:focus {
      border: 4px solid lightgrey;
    }
  }
  textarea {
    width: 90vw;
    display: block;
    height: 60vh;
  }
  p {
    margin-bottom: .25rem;
  }
  button {
    font-family: inherit;
    background: transparent;
    color: inherit;
    border: 4px solid white;
    outline: none;
    font-size: inherit;
    margin: .75rem auto;
    display: block;
    text-align: center;
    border-radius: 3px;
    &:hover {
      color: lightgrey;
      border: 4px solid lightgrey;
      cursor: pointer;
    }
  }
  @media (max-width: 538px) {
    input {
      width: 90vw;
      display: block;
    }
    textarea {
      height: 55vh;
    }
  }
  @media (max-height: 730px) {
    textarea {
      height: 50vh;
    }
  }
  @media (max-height: 640px) {
    textarea {
      height: 35vh;
    }
  }
`

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
          <span>Anomaly Name</span>
          <input value={props.nameValue} onChange={props.changeName}/>
        </label>
        <label>
          <p>
            Description of Anomaly
            {props.charsLeft < 200 ? <span style={{color:"red"}}>{props.charsLeft}</span> : null}
          </p>
          <textarea value={props.descValue} onChange={props.changeDesc}/>
        </label>
        <button type="submit">Submit Log</button>
      </StyledForm>
    </div>
  )
}

export default AnomalyLog