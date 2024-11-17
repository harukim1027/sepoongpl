import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ImageSliders from '../ImageSliders'
import image1_1 from '../../assets/images/image1_1.jpeg'
import image1_2 from '../../assets/images/image1_2.jpeg'
import image1_3 from '../../assets/images/image1_3.jpeg'
import image1_4 from '../../assets/images/image1_4.jpeg'
import image1_5 from '../../assets/images/image1_5.jpeg'
import image1_6 from '../../assets/images/image1_6.jpeg'
import image1_7 from '../../assets/images/image1_7.jpeg'
import image1_8 from '../../assets/images/image1_8.jpeg'

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: #5d5aa1;
  width: 36px;
  height: 36px;
  animation: spin 1s linear infinite;
  margin: 20px 0;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto; /* 화면 중앙 정렬 */
`
const DetailText = styled.h1`
  text-align: right;
  font-size: ${({ isMobile }) => (isMobile ? '10px' : '16px')};
  color: #222;
  font-weight: 400;
  align-self: flex-end;
  display: flex;

  margin-top: 30px;
  margin-bottom: 10px;
  margin-right: 10px;
`

const Gallery = ({ isMobile }) => {
  const images2 = [
    image1_1,
    image1_2,
    image1_3,
    image1_4,
    image1_5,
    image1_6,
    image1_7,
    image1_8,
  ]

  return (
    <Container>
      <DetailText isMobile={isMobile.isMobile}>
        * 이미지를 클릭하면 전체 크기로 볼 수 있습니다.
      </DetailText>

      <ImageSliders isMobile={isMobile} images={images2} interval={3000} />
    </Container>
  )
}

export default Gallery
