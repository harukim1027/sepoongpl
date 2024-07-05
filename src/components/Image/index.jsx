import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: ${({ resizeMode }) => resizeMode || 'cover'};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`

const Image = ({ src, alt, resizeMode }) => {
  return (
    <ImageContainer>
      <Img src={src} alt={alt} resizeMode={resizeMode} />
    </ImageContainer>
  )
}

export default Image
