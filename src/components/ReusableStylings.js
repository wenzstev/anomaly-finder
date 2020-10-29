import React from "react"
import styled from "styled-components"

export const StyledButton = styled.button
`
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
`
