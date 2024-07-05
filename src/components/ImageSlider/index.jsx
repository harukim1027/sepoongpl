import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  position: relative;
  width: 50%; /* 슬라이더의 기본 너비를 50%로 설정 */
  max-width: 600px;
  margin: 0 auto; /* 가운데 정렬을 위해 추가 */
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 992px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 80%;
  }
`

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  pointer-events: none;
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`

const PrevButton = styled(Button)`
  left: 10px;

  @media (max-width: 768px) {
    left: 5px;
  }
`

const NextButton = styled(Button)`
  right: 10px;

  @media (max-width: 768px) {
    right: 5px;
  }
`

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translate, setTranslate] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const slideInterval = setInterval(() => {
        nextSlide()
      }, interval)
      return () => clearInterval(slideInterval)
    }
  }, [currentIndex, isHovered, interval])

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setTranslate(-newIndex * 100)
  }

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setTranslate(-newIndex * 100)
  }

  return (
    <SliderContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Slide translate={translate}>
        {images.map((image, index) => (
          <SlideImage key={index} src={image} alt={`slide-${index}`} />
        ))}
      </Slide>
      {isHovered && (
        <>
          <PrevButton onClick={prevSlide}>&lt;</PrevButton>
          <NextButton onClick={nextSlide}>&gt;</NextButton>
        </>
      )}
    </SliderContainer>
  )
}

export default ImageSlider
