import React from "react"

import styled from "styled-components"

import {useField} from 'formik'


const StyledLabel = styled.label
`
margin: 1rem;
box-sizing: border-box;
display: ${props => props.multiline ? "block;" : "inline-block;"}
input, textarea {
  border: 4px solid white;
  font-family: Courier;
  border-radius: 3px;
  font-size: 1.6rem;
  background: inherit;
  color: white;
  outline: none;
  &:focus {
    border: 4px solid lightgrey;
  }
}
textarea {
  width: 100%;
  display: block;
  margin: auto;
  height: 45vh;
  box-sizing: border-box;
}
.error {
  color: red;
  font-size: 1rem;
  font-weight: bold;
}
`

export const FormInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <StyledLabel multiline={props.multiline}>
      <span style={{margin:0}}>{label}</span>
      <div>
      {props.multiline ? (
          <textarea {...field} {...props}/>
        ):(
          <input {...field} {...props} />
        )
      }
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
      </div>
    </StyledLabel>
  )
}
