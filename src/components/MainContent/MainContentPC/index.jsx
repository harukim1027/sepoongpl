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
import background from '../../../assets/images/background2.jpg'

import ImageSlider from '../../ImageSlider'
import History from '../../History'
import OrgChart from '../../OrgChart'
import KakaoMap from '../../KakaoMap'
import ProductImages from '../../ProductImages'

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffef8;
  overflow: hidden; /* 스크롤바 숨김 */
`

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 30px;
  color: var(--color_11);
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
        bgColor={'#FFFEF8'}
      >
        <Image src={background} alt="Factory" />
        <MainTextContainer>
          <span
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontWeight: 'bold',
              fontSize: '60px',
              color: '#FFFEF8',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.4)`,
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
      <GridSection>
        <BackgroundContainer>
          <SlideImageContainer>
            <ImageSlider images={images} interval={3000} />
          </SlideImageContainer>
        </BackgroundContainer>
      </GridSection>
      <StyledHR />

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
                  fontSize: '70px',
                  color: '#222',
                  textAlign: 'center',
                  textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
                }}
              >
                PRODUCTS
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
      <GridSection
        ref={ref3}
        inView={inView3}
        style={{
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
          paddingTop: '20px',
        }}
        id="comp-ly3x945g4"
        bgColor={'#3A4461'}
      >
        <BackgroundContainer>
          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{
                fontSize: '68px',
                width: '100%',
                textAlign: 'center',
                textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <span className="color_11 wixui-rich-text__text">ABOUT</span>
            </span>
          </h2>
          <br className="wixui-rich-text__text" />
          <br className="wixui-rich-text__text" />

          <div style={{ width: '90%', alignItems: 'center', padding: 30 }}>
            <AnimatedText
              color="#ffffff"
              fontSize="20px"
              align="center"
              style={{ textAlign: 'center' }}
            >
              <br className="wixui-rich-text__text" />

              <span
                className="wixui-rich-text__text"
                style={{ fontSize: '18px', width: '100%', textAlign: 'center' }}
              >
                <span className="color_11 wixui-rich-text__text">
                  세풍P.L은 2002년에 설립된 이래, 2016년 (주) 세풍피엘로 법인
                  전환을 완료하며, 흙막이 시스템(SLODE PANNEL SYSTEM) 제작의
                  선두주자로 자리매김하였습니다.
                  <br className="wixui-rich-text__text" />
                  오랜 기간 동안 축적된 노하우를 바탕으로 최상의 품질을 자랑하는
                  제품을 생산하고 있습니다.
                </span>
                <br className="wixui-rich-text__text" />
                <br className="wixui-rich-text__text" />

                <span className="color_11 wixui-rich-text__text">
                  고객 여러분의 지속적인 지도와 조언에 감사드리며, 신뢰와 소신을
                  바탕으로 사회에 기여하는 (주) 세풍피엘이 되기 위해 최선을
                  다하겠습니다.
                </span>
              </span>
            </AnimatedText>
          </div>
          <RightAlignedText>
            <h2
              className="font_2 wixui-rich-text__text"
              style={{ width: '100%' }}
            >
              <span
                className="wixui-rich-text__text"
                style={{ fontSize: '25px', width: '100%' }}
              >
                <AnimatedText
                  color="#ffffff"
                  fontSize="20px"
                  style={{ textAlign: 'center' }}
                >
                  (주) 세풍피엘 대표이사 임 상 덕
                </AnimatedText>
              </span>
            </h2>
          </RightAlignedText>
        </BackgroundContainer>
      </GridSection>
      <GridSection
        ref={ref4}
        inView={inView4}
        style={{ gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr' }}
        id="comp-ly3x945m1"
        bgColor={'#FFFEF8'}
      >
        <BackgroundContainer>
          <br className="wixui-rich-text__text" />

          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{
                fontSize: '68px',
                width: '100%',
                textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: 'bold',
                  fontSize: '70px',
                  color: '#222',
                }}
              >
                HISTORY
              </span>
            </span>
          </h2>
          <br className="wixui-rich-text__text" />
          <br className="wixui-rich-text__text" />

          <History />
        </BackgroundContainer>
      </GridSection>
      <StyledHR />
      <GridSection
        ref={ref5}
        inView={inView5}
        style={{ gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr' }}
        id="comp-ly3x945m1"
        bgColor={'#FFFEF8'}
      >
        <BackgroundContainer>
          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{
                fontSize: '68px',
                width: '100%',
                textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <StyledSpan>ORGANIZATION</StyledSpan>
            </span>
          </h2>
          <br className="wixui-rich-text__text" />
          <br className="wixui-rich-text__text" />
          <OrgChart />
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
                    fontSize: '70px',
                    color: '#222',
                    textAlign: 'center',
                    textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
                  }}
                >
                  LOCATION
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
            <KakaoMap />
          </div>
        </BackgroundContainer>
      </GridSection>
    </MainContentContainer>
  )
}

export default MainContentPC
