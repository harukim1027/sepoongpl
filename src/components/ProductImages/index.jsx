import React from 'react'
import styled from 'styled-components'
import productImage1 from '../../assets/images/product1.png'
import productImage2 from '../../assets/images/product2.png'
import productImage3 from '../../assets/images/product3.png'
import productImage4 from '../../assets/images/product4.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px;
`

const ImagesRow = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 20px;
`

const ImgContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  max-width: 450px;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;

  img {
    object-fit: cover;
    width: 100%;
    height: 270px;
    margin: 0;
    transition: opacity 0.5s ease;
  }

  &:hover img {
    opacity: 0.5;
  }
`

const TextContainer = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`

const ProductImages = () => {
  const tabs = [
    'Single Slide System',
    'Double Slide System',
    'TS Panel 사각기초 기본형 / 확장형',
    '산업기계 및 철골 제작, 설치',
  ]

  const images = [productImage1, productImage2, productImage3, productImage4]

  return (
    <Container>
      <ImagesRow>
        {images.map((image, index) => (
          <Link to={`/product/${index + 1}`} key={index}>
            <ImgContainer>
              <img src={image} alt={`Product image ${index + 1}`} />
              <TextContainer>{tabs[index]}</TextContainer>
            </ImgContainer>
          </Link>
        ))}
      </ImagesRow>
    </Container>
  )
}

export default ProductImages
