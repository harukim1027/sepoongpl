import React from 'react'
import styled from 'styled-components'

import image1 from '../../assets/images/3dImage1.png'
import image2 from '../../assets/images/3dImage2.png'
import image3 from '../../assets/images/3dImage3.png'
import image4 from '../../assets/images/3dImage4.png'
import ImageSlider from '../ImageSlider'
import AnimatedText from '../Animated/AnimatedText'

const BackgroundSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 20px;
`

const SliderImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--color_11);
  z-index: 2;
  text-align: center;
`

const BackgroundSliderSection = () => {
  const images = [image1, image2, image3, image4]

  return (
    <BackgroundSliderContainer>
      <SliderImageContainer>
        <ImageSlider images={images} interval={3000} />
      </SliderImageContainer>
      <TextContainer>
        <AnimatedText color="var(--color_11)" fontSize="80px">
          특별한 경험
        </AnimatedText>
        <AnimatedText color="var(--color_11)" fontSize="26px">
          전문 설치 전문가
        </AnimatedText>
      </TextContainer>
    </BackgroundSliderContainer>
  )
}

export default BackgroundSliderSection
