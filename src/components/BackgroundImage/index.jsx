import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 100vw;
  height: auto;

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
  width: 100vw;
  height: auto;
  opacity: 0.5;
  transform: rotate(270deg);
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

const BackgroundImage = ({ src, alt, resizeMode }) => {
  return (
    <ImageContainer>
      <Img src={src} alt={alt} resizeMode={resizeMode} />
    </ImageContainer>
  )
}

export default BackgroundImage
