import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useInView } from 'react-intersection-observer'
import Image from '../../Image'
import AnimatedText from '../../Animated/AnimatedText'
import ImageSlider from '../../ImageSlider'
import History from '../../History'
import OrgChart from '../../OrgChart'
import KakaoMap from '../../KakaoMap'
import ProductImages from '../../ProductImages'
import image1 from '../../../assets/images/3dImage1.png'
import image2 from '../../../assets/images/3dImage2.png'
import image3 from '../../../assets/images/3dImage3.png'
import image4 from '../../../assets/images/3dImage4.png'
import background from '../../../assets/images/main_mobile.jpg'
import building1 from '../../../assets/images/building1.jpeg'
import image1_1 from '../../../assets/images/image1_1.jpeg'
import image1_2 from '../../../assets/images/image1_2.jpeg'
import image1_3 from '../../../assets/images/image1_3.jpeg'
import image1_4 from '../../../assets/images/image1_4.jpeg'
import image1_5 from '../../../assets/images/image1_5.jpeg'
import image1_6 from '../../../assets/images/image1_6.jpeg'
import image1_7 from '../../../assets/images/image1_7.jpeg'
import image1_8 from '../../../assets/images/image1_8.jpeg'
import AboutSection from '../../AboutSection'
import Section from '../../Section'
import ImageSliders from '../../ImageSliders'
const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffef8;
  overflow: hidden; /* 스크롤바 숨김 */
`
const ResponsiveImage = styled.img`
  width: 100%; /* 기본값: 모바일에서는 전체 너비 */
  height: auto; /* 비율 유지 */
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* 그림자 추가 */

  @media (min-width: 768px) {
    width: 70%; /* PC 화면에서는 너비를 70%로 */
  }
`
const SlideImageContainers = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

// 애니메이션 효과를 정의
const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  color: var(--color_11);
  position: absolute;
  top: 100px; /* 위에 마진 30px */
  z-index: 2; /* 텍스트가 이미지 위에 오도록 설정 */
  animation: ${slideDown} 1s ease forwards; /* 애니메이션 적용 */
  padding: 30px;
`

const MainSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
`

const BackgroundContainer = styled.div`
  width: 100%;
  padding: 0;
  justify-content: center;
`

const BackgroundContainerProducts = styled.div`
  width: 100%;
  justify-content: center;
`

const SlideImageContainer = styled.div`
  position: relative;
  width: 90%;
  overflow: hidden;
`

const SectionContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  padding: 0px 0;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
`
const GridSection = styled(Section)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-top: 20px !important;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
`
const RightAlignedText = styled.div`
  text-align: center;
  margin-top: 20px;
  color: var(--color_11);
`

const StyledHR = styled.hr`
  border: 0;
  height: 1px;
  width: 60%;
  background: #3a4461;
  margin: 30px auto;
`

const MainContentMobile = () => {
  const images = [image1, image2, image3, image4]
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
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <MainContentContainer>
      {/* 섹션 1 - 메인 이미지 및 텍스트 */}
      <MainSection ref={ref1} inView={inView1}>
        <Image
          src={background}
          alt="Factory"
          style={{ width: '100%', objectFit: 'cover' }}
        />
        <MainTextContainer>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '35px',
              color: '#FFFEF8',

              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '40px',
                color: '#FFCF89',

                textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
              }}
            >
              '미래'
            </span>
            를 설계하다,
          </span>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '35px',
              color: '#FFFEF8',
              marginTop: '10px',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '40px',
                color: '#FFCF89',

                textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '혁신'
            </span>
            을 만들다.
          </span>
        </MainTextContainer>
      </MainSection>

      {/* 섹션 3 - 제품 소개 */}
      <SectionContainer ref={ref3} inView={inView3}>
        <BackgroundContainerProducts>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#222',
              marginTop: '30px',
              marginBottom: '30px',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
            }}
          >
            제품 소개
          </h2>
          <h2
            style={{
              textAlign: 'right',
              fontSize: '10px',
              color: '#222',
              fontWeight: '400',

              marginTop: '30px',
              marginBottom: '10px',
              marginRight: '10px',
            }}
          >
            * 이미지를 클릭하면 상세 페이지로 이동합니다.
          </h2>
          <ProductImages />
        </BackgroundContainerProducts>
      </SectionContainer>
      {/* 섹션 2 - 이미지 슬라이더 */}
      <SectionContainer ref={ref2} inView={inView2}>
        <BackgroundContainer>
          <SlideImageContainer>
            <ImageSlider images={images} interval={3000} />
          </SlideImageContainer>
        </BackgroundContainer>
      </SectionContainer>
      <StyledHR />

      {/* 섹션 7 - 위치 */}
      <SectionContainer ref={ref7} inView={inView7}>
        <BackgroundContainer>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#222',
              marginTop: '30px',
              marginBottom: '30px',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
            }}
          >
            찾아오는 길
          </h2>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '16px',
              color: '#222',
              fontWeight: '500',

              marginTop: '30px',
              marginBottom: '10px',
            }}
          >
            경기도 안산시 단원구 번영2로 안길41 (시화공단 4다 101-3)
          </h2>
          <ResponsiveImage src={building1} />

          <KakaoMap />
        </BackgroundContainer>
      </SectionContainer>
    </MainContentContainer>
  )
}

export default MainContentMobile
