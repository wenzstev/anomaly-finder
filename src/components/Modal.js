import React from "react"

import styled, {css} from "styled-components"

const StyledModal = styled.div
`
  background-color: black;
  width: 95vw;
  height: 90vh;
  border-radius: 3px;
  border: 4px solid white;
  color: white;
  font-family: Courier;
  font-size: 1.6rem;
  h3 {
    margin: 1rem;
  }
  p, span {
    margin: 2rem;
  }
  overflow: auto;
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

const Modal = (props) => {
  return (
      <StyledModal onClick={(e)=>e.stopPropagation()}>{props.children}</StyledModal>
  )
}

const ModalBackdrop = (props) => {
  return (
    <Backdrop open={props.open} onClick={props.closeModal}>
      {props.open ? <Modal>{props.contents}</Modal> : null}
    </Backdrop>
  )
}

export default ModalBackdrop
