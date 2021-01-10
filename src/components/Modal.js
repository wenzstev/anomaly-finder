import React from "react"

import styled, {css} from "styled-components"

import {StyledButton} from "./ReusableStylings"

const StyledModal = styled.div
`
  background-color: black;
  position: relative;
  width: 95vw;
  border-radius: 3px;
  border: 4px solid white;
  color: white;
  font-family: Courier;
  font-size: 1.4rem;
  h3 {
    margin: 1rem;
  }
  p, span {
    margin: 2rem;
  }
`

const Backdrop = styled.div
`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: ${props=>props.open ? "rgba(0,0,0,.5)" : "transparent"};
  ${props =>
    props.open &&
      css`
      width: 100vw;
      height: 100vh;
    `};
`

const Footer = styled.div
`
outline: 3px solid white;
display: flex;
justify-content: center;
width: 95vw;
background-color: black;
`

const CloseButton = styled.button 
`
float: right;
background: none;
color: inherit;
font-family: inherit;
outline: none;
border: none;
font-size: 1.2rem;
`


const ContentContainer = styled.div
`
overflow: auto;
width: 100%;
height: calc(90vh - 3rem);
`

const Modal = (props) => {
  console.log(props.closeButton)
  return (
      <StyledModal onClick={(e)=>e.stopPropagation()}>
        <CloseButton onClick={props.closeModal}>✕</CloseButton>
        <ContentContainer>
          {props.children}
        </ContentContainer>
        <Footer>
          {props.closeButton ? <StyledButton onClick={props.closeModal}>Close</StyledButton> : null}
        </Footer>
      </StyledModal>
  )
}

const ModalBackdrop = (props) => {
  return (
    <Backdrop open={props.open} onClick={props.closeModal}>
      {props.open ?
        (<Modal
          closeButton={props.closeButton}
          closeModal={props.closeModal}>
          {props.contents}
        </Modal>) : null}
    </Backdrop>
  )
}

export default ModalBackdrop
