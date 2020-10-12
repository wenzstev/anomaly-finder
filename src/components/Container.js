import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div
`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  @media (max-width: 736px) {
    flex-direction: column;
  }
`

const Container = (props) => <StyledContainer>{props.children}</StyledContainer>

export default Container
