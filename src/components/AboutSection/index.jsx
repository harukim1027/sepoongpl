import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import AnimatedText from '../Animated/AnimatedText'

const GridSection = styled.section`
  display: flex;
  justify-content: center; /* 내용 중앙 정렬 */
  align-items: center;
  background-color: #3a4461; /* 배경색을 양옆에 꽉 차게 */
  width: 100%; /* 배경색이 양옆에 꽉 차도록 */
  text-align: center;

  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
  }
`

const BackgroundContainer = styled.div`
  max-width: 800px; /* 최대 너비를 설정하여 텍스트 중앙 정렬 */
  width: 100%;
  padding: 0 30px; /* 텍스트와 내용 좌우 여백 */
`

const CenteredText = styled.div`
  color: #ffffff;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`

const AboutSection = () => {
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <GridSection
      ref={ref3}
      style={{
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <BackgroundContainer>
        <div style={{ textAlign: 'center', alignItems: 'center' }}>
          <AnimatedText
            color="#ffffff"
            fontSize="20px"
            align="center"
            style={{ textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{
                fontSize: '18px',
                width: '100%',
                textAlign: 'center',
                lineHeight: '2',
              }}
            >
              <span className="color_11 wixui-rich-text__text">
                세풍P.L은 2002년에 설립된 이래, 2016년 (주) 세풍피엘로 법인
                전환을 완료하며, 흙막이 시스템(SLODE PANNEL SYSTEM) 제작의
                선두주자로 자리매김하였습니다.
              </span>
              <br />
              <span className="color_11 wixui-rich-text__text">
                오랜 기간 동안 축적된 노하우를 바탕으로 최상의 품질을 자랑하는
                제품을 생산하고 있습니다.
              </span>
              <br />
              <span className="color_11 wixui-rich-text__text">
                고객 여러분의 지속적인 지도와 조언에 감사드리며, 신뢰와 소신을
                바탕으로 사회에 기여하는 (주) 세풍피엘이 되기 위해 최선을
                다하겠습니다.
              </span>
            </span>
          </AnimatedText>
        </div>

        <CenteredText>
          <h2
            className="font_2 wixui-rich-text__text"
            style={{ fontSize: '25px' }}
          >
            <AnimatedText color="#ffffff" fontSize="20px">
              (주) 세풍피엘 대표이사 임 상 덕
            </AnimatedText>
          </h2>
        </CenteredText>
      </BackgroundContainer>
    </GridSection>
  )
}

export default AboutSection
