import React from 'react'
import styled from 'styled-components'
import productImage1 from '../../assets/images/product1.png'
import productImage2 from '../../assets/images/product2.png'
import productImage3 from '../../assets/images/product3.png'
import productImage4 from '../../assets/images/product4.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  gap: 20px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`

const ImagesRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row; /* 데스크톱에서 가로 정렬 */
  }
`

const ImgContainer = styled.div`
  width: ${(props) => (props.isMobile ? '100%' : 'clamp(200px, 25vw, 400px)')};
  height: ${(props) => (props.isMobile ? 'auto' : 'clamp(150px, 20vw, 300px)')};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .text-container {
    color: #000;
    opacity: 1;
  }
`

const TextContainer = styled.div`
  font-size: 16px;
  color: #333;
  width: 100%;
  position: absolute;
  bottom: 10px;
  z-index: 2;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px 10px;
  pointer-events: none;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`

const ProductImages = () => {
  const tabs = [
    'Single Slide System',
    'Double Slide System',
    'TS Panel 사각기초 기본형 / 확장형',
    '산업기계 및 철골 제작, 설치',
  ]

  const images = [productImage1, productImage2, productImage3, productImage4]
  const isMobile = window.innerWidth <= 768

  return (
    <Container>
      <ImagesRow>
        {images.map((image, index) => (
          <Link to={`/product/${index + 1}`} key={index}>
            <ImgContainer isMobile={isMobile}>
              <img src={image} alt={`Product image ${index + 1}`} />
              <TextContainer className="text-container">
                {tabs[index]}
              </TextContainer>
            </ImgContainer>
          </Link>
        ))}
      </ImagesRow>
    </Container>
  )
}

export default ProductImages
