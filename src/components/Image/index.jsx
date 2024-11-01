import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh; /* 모바일에서도 전체 화면을 차지하도록 설정 */
  }

  @media (max-width: 480px) {
    height: 100vh; /* 작은 모바일에서도 전체 화면 차지 */
  }
`

const Img = styled.img`
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover; /* 이미지가 컨테이너에 가득 차도록 설정 */

  @media (max-width: 768px) {
    width: 100%;
    height: 100%; /* 이미지가 모바일에서 전체를 채우도록 */
    object-fit: cover; /* 모바일에서도 이미지가 잘리더라도 가득 채움 */
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%; /* 더 작은 모바일에서도 전체를 차지 */
    object-fit: cover; /* 작은 화면에서도 비율을 유지하며 가득 차도록 */
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
