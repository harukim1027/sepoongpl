import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import Section from '../../Section'
import Image from '../../Image'
import AnimatedText from '../../Animated/AnimatedText'
import '../../../styles/styles.css'
import useMediaQuery from '@mui/material/useMediaQuery'
import image1 from '../../../assets/images/3dImage1.png'
import image2 from '../../../assets/images/3dImage2.png'
import image3 from '../../../assets/images/3dImage3.png'
import image4 from '../../../assets/images/3dImage4.png'

import background from '../../../assets/images/main_pc2.png'
import building1 from '../../../assets/images/building1.jpeg'

import ImageSlider from '../../ImageSlider'
import History from '../../History'
import OrgChart from '../../OrgChart'
import KakaoMap from '../../KakaoMap'
import ProductImages from '../../ProductImages'
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
const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 60px;
`
const StyledSpan = styled.span`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: bold;
  font-size: 70px;
  color: #222;
`

const MainSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const BackgroundContainer = styled.div`
  width: 100%;
`

const BackgroundContainerProducts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  justify-content: center;
`

const SlideImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
`
const SlideImageContainers = styled.div`
  position: relative;
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
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
  text-align: right;
  margin-top: 10px;
  margin-right: 30px;
  color: var(--color_11);
`
const StyledHR = styled.hr`
  border: 0;
  height: 1px;
  width: 40%;
  background: #3a4461;
  margin: 30px auto;
`
const MainContentPC = () => {
  const images = [image1, image2, image3, image4]

  const isMobile = useMediaQuery('(max-width: 768px)')

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <MainContentContainer>
      <MainSection
        ref={ref1}
        inView={inView1}
        id="comp-ly3x945a1"
        // bgColor={'#FFFEF8'}
      >
        <Image src={background} alt="Factory" />
        <MainTextContainer>
          <span
            style={{
              fontWeight: 'bold',
              fontSize: '50px',
              color: '#FFFEF8',

              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '60px',
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
              fontSize: '50px',
              color: '#FFFEF8',
              marginTop: '10px',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '60px',
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

      <GridSection ref={ref6} inView={inView6} bgColor={'#FFFEF8'}>
        <BackgroundContainerProducts>
          <br className="wixui-rich-text__text" />

          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{ fontSize: '68px', width: '100%', textAlign: 'center' }}
            >
              <span
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 'bold',
                  fontSize: '40px',
                  color: '#222',
                  textAlign: 'center',
                  textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
                }}
              >
                제품 소개
              </span>
            </span>
          </h2>
          <br className="wixui-rich-text__text" />
          <br className="wixui-rich-text__text" />
          <h2
            style={{
              textAlign: 'right',
              fontSize: '16px',
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
      </GridSection>
      <GridSection>
        <BackgroundContainer>
          <SlideImageContainer>
            <ImageSlider images={images} interval={3000} />
          </SlideImageContainer>
        </BackgroundContainer>
      </GridSection>

      <StyledHR />

      <GridSection
        ref={ref7}
        inView={inView7}
        style={{
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
        id="comp-ly3x945m1"
        bgColor={'#FFFEF8'}
      >
        <BackgroundContainer
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              padding: 20,
              justifyContent: 'center',
              flexDirection: 'column',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h2
              className="font_2 wixui-rich-text__text"
              style={{ width: '100%', textAlign: 'center' }}
            >
              <span
                className="wixui-rich-text__text"
                style={{ fontSize: '68px', width: '100%', textAlign: 'center' }}
              >
                <span
                  style={{
                    fontFamily: "'Red Hat Display', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '40px',
                    color: '#222',
                    textAlign: 'center',
                    textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
                  }}
                >
                  찾아오는 길
                </span>
              </span>
              <h2
                style={{
                  textAlign: 'center',
                  fontSize: '20px',
                  color: '#222',
                  fontWeight: '500',

                  marginTop: '30px',
                  marginBottom: '10px',
                }}
              >
                경기도 안산시 단원구 번영2로 안길41 (시화공단 4다 101-3)
              </h2>
            </h2>
            <ResponsiveImage src={building1} />
            <KakaoMap />
          </div>
        </BackgroundContainer>
      </GridSection>
    </MainContentContainer>
  )
}

export default MainContentPC
