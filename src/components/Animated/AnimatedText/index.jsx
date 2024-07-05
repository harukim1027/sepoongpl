import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const TextContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color }) => color || '#000'};
  width: 100%;
  font-family: 'Red Hat Display', sans-serif;

  @media (max-width: 768px) {
    font-size: ${({ smallScreenFontSize }) => smallScreenFontSize || '18px'};
  }

  @media (max-width: 480px) {
    font-size: ${({ smallerScreenFontSize }) =>
      smallerScreenFontSize || '20px'};
  }
`

const AnimatedText = ({
  children,
  fontSize,
  smallScreenFontSize,
  smallerScreenFontSize,
  color,
}) => {
  return (
    <TextContainer
      fontSize={fontSize}
      smallScreenFontSize={smallScreenFontSize}
      smallerScreenFontSize={smallerScreenFontSize}
      color={color}
    >
      {children}
    </TextContainer>
  )
}

export default AnimatedText
