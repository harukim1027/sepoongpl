import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const SlideWrapper = styled.div`
  display: grid;
  gap: 10px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, auto);
`

const Slide = styled.div`
  box-sizing: border-box;
  width: 100%;
`

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
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
`

const NextButton = styled(Button)`
  right: 10px;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalImage = styled.img`
  max-width: 70%;
  max-height: auto;
  object-fit: contain;
`

const CloseMessage = styled.div`
  position: absolute;
  left: 85%;
  top: 1%;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 30px;
  text-align: center;
  z-index: 10;
  cursor: pointer;
`

const ImageSliders = ({ images, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translate, setTranslate] = useState(0)
  const [columns, setColumns] = useState(isMobile ? 2 : 2)
  const [rows, setRows] = useState(2)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    const updateLayout = () => {
      if (isMobile) {
        setColumns(1)
        setRows(2)
      } else {
        setColumns(2)
        setRows(2)
      }
    }
    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const nextSlide = () => {
    const maxIndex = Math.ceil(images.length / (columns * rows)) - 1
    const newIndex = currentIndex + 1 > maxIndex ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTranslate(-newIndex * 100)
  }

  const prevSlide = () => {
    const maxIndex = Math.ceil(images.length / (columns * rows)) - 1
    const newIndex = currentIndex - 1 < 0 ? maxIndex : currentIndex - 1
    setCurrentIndex(newIndex)
    setTranslate(-newIndex * 100)
  }

  const totalSlides = Math.ceil(images.length / (columns * rows))
  const totalWidth = totalSlides * 100

  // 모달 열기
  const openModal = (image) => {
    setModalImage(image)
    setIsModalOpen(true)
  }

  // 모달 닫기
  const closeModal = () => {
    setModalImage(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <SliderContainer>
        <SlideWrapper
          translate={translate}
          columns={columns}
          rows={rows}
          totalWidth={totalWidth}
        >
          {images.map((image, index) => (
            <Slide key={index}>
              <SlideImage
                src={image}
                alt={`slide-${index}`}
                onClick={() => openModal(image)}
              />
            </Slide>
          ))}
        </SlideWrapper>
        {images.length > columns * rows && (
          <>
            <PrevButton onClick={prevSlide}>&lt;</PrevButton>
            <NextButton onClick={nextSlide}>&gt;</NextButton>
          </>
        )}
      </SliderContainer>
      {isModalOpen && (
        <ModalOverlay>
          <CloseMessage onClick={closeModal}>X</CloseMessage>

          <ModalContent>
            <ModalImage src={modalImage} alt="modal-view" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default ImageSliders
