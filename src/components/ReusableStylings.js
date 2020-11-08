import React from "react"
import styled from "styled-components"

export const StyledButton = styled.button
`
  font-family: inherit;
  background: transparent;
  color: ${props=>props.subtle ? 'darkgrey':'white'};
  border: 4px solid ${props=>props.subtle ? 'darkgrey' : 'white'};
  outline: none;
  font-size: inherit;
  margin: ${props=>props.noMargin ? '0' : '.75rem 1rem'};
  border-radius: 3px;
  &:hover {
    color: lightgrey;
    border: 4px solid lightgrey;
    cursor: pointer;
  }
  ${props => props.centered ? 'display:block; text-align:center' : null}
  ${props=> props.fullWidth ? 'width:100%' : null}
  ${props=> props.largeOnly ? '@media(max-width: 800px){display:none;}': null}
`
export const StyledForm = styled.form
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
