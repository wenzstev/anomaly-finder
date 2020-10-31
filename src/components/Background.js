import React from "react"
import styled from "styled-components"

const StyledBackground = styled.div
`
  background-color: black;
  height: 100%;
  width: 100vw;
`

const Background = (props) => {
  return <StyledBackground>{props.children}</StyledBackground>
}

export default Background
