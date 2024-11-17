import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import AnimatedText from '../Animated/AnimatedText'
import aboutImage from '../../assets/images/logo1.png'

const GridSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffef8; /* 배경색 */
  width: ${({ isMobile }) => (isMobile ? `80%` : `60%`)};

  text-align: center;
  position: relative;
  padding: 50px;
  padding-bottom: 100px;
  padding-top: 100px;

  margin-bottom: ${({ isMobile }) => isMobile && `120px`};
  margin-top: ${({ isMobile }) => isMobile && `50px`};

  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.06); /* 그림자 효과 */
  border-radius: 15px; /* 둥근 모서리 */
  border: 1px solid #e0e0e0; /* 테두리 색상 */
  background: linear-gradient(
    135deg,
    #fefaf4 0%,
    #fefaf4 50%,
    #fefaf4 100%
  ); /* 그라데이션 효과 */

  @media (max-width: 768px) {
    padding: 30px;
    padding-bottom: 30px;
    border-radius: 10px; /* 모바일에서 더 작은 둥근 모서리 */
  }
`

const BackgroundContainer = styled.div`
  max-width: 800px; /* 최대 너비를 설정하여 텍스트 중앙 정렬 */
  width: 100%;
  padding: 0 30px; /* 텍스트와 내용 좌우 여백 */
`

const CenteredText = styled.div`
  color: #000000;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`

const BackgroundImage = styled.img`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 30%;
  opacity: 0.2; /* 투명도 조절 */
  pointer-events: none; /* 이미지 클릭 방지 */

  @media (max-width: 768px) {
    width: 40%;
    bottom: 10px;
    right: 10px;
  }
`

const AboutSection = ({ isMobile }) => {
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <GridSection
      isMobile={isMobile}
      ref={ref3}
      style={{
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {/* 배경 이미지 */}
      <BackgroundImage src={aboutImage} alt="Company Logo" />

      <BackgroundContainer>
        <div style={{ textAlign: 'center', alignItems: 'center' }}>
          <AnimatedText
            color="#000000"
            fontSize={isMobile ? '20px' : '30px'}
            align="center"
            style={{ textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{
                fontSize: isMobile ? '13px' : '18px',
                width: '100%',
                textAlign: 'center',
                lineHeight: '2',
              }}
            >
              <span className="wixui-rich-text__text">
                세풍P.L은 2002년에 설립된 이래,&nbsp;
              </span>
              <span className="wixui-rich-text__text">
                2016년 (주) 세풍피엘로 법인 전환을 완료하며,
              </span>
              <br />
              <span className="wixui-rich-text__text">
                흙막이 시스템(SLODE PANNEL SYSTEM) 제작의 선두주자로
                자리매김하였습니다.
              </span>
              <br />
              <span className="wixui-rich-text__text">
                오랜 기간 동안 축적된 노하우를 바탕으로 최상의 품질을 자랑하는
                제품을 생산하고 있습니다.
              </span>
              <br />
              <span className=" wixui-rich-text__text">
                고객 여러분의 지속적인 지도와 조언에 감사드리며,
              </span>
              <br />
              <span className=" wixui-rich-text__text">
                신뢰와 소신을 바탕으로 사회에 기여하는 (주)세풍피엘이 되기 위해
                최선을 다하겠습니다.
              </span>
            </span>
          </AnimatedText>
        </div>

        <CenteredText>
          <h2
            className="font_2 wixui-rich-text__text"
            style={{ fontSize: '25px' }}
          >
            <AnimatedText color="#000000" fontSize="20px">
              (주)세풍피엘 대표이사 임 상 덕
            </AnimatedText>
          </h2>
        </CenteredText>
      </BackgroundContainer>
    </GridSection>
  )
}

export default AboutSection
