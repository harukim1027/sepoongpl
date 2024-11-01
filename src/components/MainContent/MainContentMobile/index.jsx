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
import background from '../../../assets/images/background2.jpg'
import AboutSection from '../../AboutSection'
const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffef8;
  overflow: hidden; /* 스크롤바 숨김 */
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
`

const StyledSpan = styled.span`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: #222;
  text-align: center;
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
`

const BackgroundContainerProducts = styled.div`
  width: 100%;
  justify-content: center;
`

const SlideImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
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
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 'bold',
              fontSize: '40px',
              color: '#FFFEF8',
              textAlign: 'center',
            }}
          >
            Building the Future
            <br />
            with Advanced Machinery and Steel
            <br />
            Fabrication
          </span>
        </MainTextContainer>
      </MainSection>

      {/* 섹션 2 - 이미지 슬라이더 */}
      <SectionContainer ref={ref2} inView={inView2}>
        <BackgroundContainer>
          <SlideImageContainer>
            <ImageSlider images={images} interval={3000} />
          </SlideImageContainer>
        </BackgroundContainer>
      </SectionContainer>
      <StyledHR />

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
            }}
          >
            PRODUCTS
          </h2>
          <ProductImages />
        </BackgroundContainerProducts>
      </SectionContainer>

      {/* 섹션 4 - CEO 인사말 */}
      <SectionContainer
        ref={ref4}
        inView={inView4}
        style={{
          backgroundColor: '#3A4461',
        }}
      >
        <BackgroundContainer
          style={{
            backgroundColor: '#3A4461',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#ffffff',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            ABOUT
          </h2>
          <AboutSection />
        </BackgroundContainer>
      </SectionContainer>

      {/* 섹션 5 - 회사 역사 */}
      <SectionContainer ref={ref5} inView={inView5}>
        <BackgroundContainer>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#222',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            HISTORY
          </h2>
          <History />
        </BackgroundContainer>
      </SectionContainer>

      <StyledHR />

      {/* 섹션 6 - 조직도 */}
      <SectionContainer ref={ref6} inView={inView6}>
        <BackgroundContainer>
          <h2
            style={{
              textAlign: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#222',
              marginTop: '30px',
              marginBottom: '30px',
            }}
          >
            ORGANIZATION
          </h2>
          <OrgChart />
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
            }}
          >
            LOCATION
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
          <KakaoMap />
        </BackgroundContainer>
      </SectionContainer>
    </MainContentContainer>
  )
}

export default MainContentMobile
