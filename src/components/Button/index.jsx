import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`

const ButtonElement = styled.div`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-align: center;
`

const Button = ({ children }) => {
  return (
    <ButtonContainer>
      <ButtonElement>{children}</ButtonElement>
    </ButtonContainer>
  )
}

export default Button
