import React from "react"

import styled from "styled-components"

const Button = styled.button`
  font-size: 3rem;
  text-align: center;
  color: white;
  background-color: transparent;
  border: 4px solid white;
  outline: none;
  border-radius: 3px;
  font-family: Courier;
  &:hover {
    color: lightgrey;
    border: 4px solid lightgrey;
    cursor: pointer;
  }
`

const MainActionButton = (props) => {
  return (
    <Button>{props.text}</Button>
  )
}

export default MainActionButton
