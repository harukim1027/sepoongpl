import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  text-align: ${({ align }) => align || 'left'};
  line-height: 1.5;
  width: 100%;

  @media (max-width: 768px) {
    font-size: ${({ smallScreenFontSize }) => smallScreenFontSize || '16px'};
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: ${({ smallerScreenFontSize }) =>
      smallerScreenFontSize || '14px'};
  }
`

const Text = ({
  children,
  fontSize,
  smallScreenFontSize,
  smallerScreenFontSize,
  color,
  align = 'left',
}) => {
  return (
    <TextContainer
      style={{ fontSize, color, textAlign: align }}
      smallScreenFontSize={smallScreenFontSize}
      smallerScreenFontSize={smallerScreenFontSize}
    >
      {children}
    </TextContainer>
  )
}

export default Text
