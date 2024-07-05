import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import Section from '../../Section'
import Image from '../../Image'
import AnimatedText from '../../Animated/AnimatedText'
import Button from '../../Button'
import '../../../styles/styles.css'
import image1 from '../../../assets/images/3dImage1.png'
import image2 from '../../../assets/images/3dImage2.png'
import image3 from '../../../assets/images/3dImage3.png'
import image4 from '../../../assets/images/3dImage4.png'
import ImageSlider from '../../ImageSlider'
import IconList from '../../IconList'

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fffef8;
`

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20px;
  left: 20px;
  color: var(--color_11);
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const BackgroundContainer = styled.div`
  width: 100%;
  padding: 20px;
`

const SlideImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto; /* Center the slider */
`

const GridSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 769px) {
    grid-template-columns: 2fr 1fr;
  }
`

const RightAlignedText = styled.div`
  text-align: right;
  margin-top: 10px;
  margin-right: 30px;
  color: var(--color_11);
`

const AnimatedSection = styled(GridSection)`
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
`

const MainContentMobile = () => {
  const images = [image1, image2, image3, image4]
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <MainContentContainer>
      <AnimatedSection
        ref={ref1}
        inView={inView1}
        id="comp-ly3x945a1"
        bgColor={'#FFFEF8'}
      >
        <BackgroundContainer>
          <ImageContainer>
            <Image
              src="https://static.wixstatic.com/media/11062b_78134d5be79b47c69ab7a9d034104c44~mv2_d_3949_2633_s_4_2.jpg/v1/fill/w_1402,h_828,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_78134d5be79b47c69ab7a9d034104c44~mv2_d_3949_2633_s_4_2.jpg"
              alt="Factory"
              style={{ width: '100%', height: 'auto' }}
              resizeMode="contain"
            />
            <MainTextContainer>
              <AnimatedText color="var(--color_11)" fontSize="80px">
                특별한 경험
              </AnimatedText>
              <AnimatedText color="var(--color_11)" fontSize="26px">
                전문 설치 전문가
              </AnimatedText>
            </MainTextContainer>
          </ImageContainer>
        </BackgroundContainer>
        <BackgroundContainer>
          <SlideImageContainer>
            <ImageSlider images={images} interval={3000} />
            <Button style={{ width: '100%' }}>더 알아보기</Button>
          </SlideImageContainer>
        </BackgroundContainer>
      </AnimatedSection>
      <AnimatedSection ref={ref2} inView={inView2}>
        <IconList />
      </AnimatedSection>
      <AnimatedSection
        ref={ref3}
        inView={inView3}
        id="comp-ly3x945g4"
        bgColor={'#3A4461'}
      >
        <BackgroundContainer>
          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{ fontSize: '68px', width: '100%' }}
            >
              <span className="color_11 wixui-rich-text__text">CEO 인사말</span>
            </span>
          </h2>

          <AnimatedText color="#ffffff" fontSize="20px" align="center">
            <span
              className="wixui-rich-text__text"
              style={{ fontSize: '16px', width: '100%' }}
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
          <RightAlignedText>
            <h2
              className="font_2 wixui-rich-text__text"
              style={{ width: '100%' }}
            >
              <span
                className="wixui-rich-text__text"
                style={{ fontSize: '25px', width: '100%' }}
              >
                <AnimatedText color="#ffffff" fontSize="20px">
                  (주) 세풍피엘 대표이사 임 상 덕
                </AnimatedText>
              </span>
            </h2>
          </RightAlignedText>
        </BackgroundContainer>
      </AnimatedSection>
      <AnimatedSection
        ref={ref4}
        inView={inView4}
        id="comp-ly3x945m1"
        bgColor={'#FFFEF8'}
      >
        <BackgroundContainer>
          <AnimatedText fontSize="68px">프로젝트</AnimatedText>
          <AnimatedText fontSize="26px">작업 사례</AnimatedText>
        </BackgroundContainer>
        <BackgroundContainer>
          <Image
            src="https://static.wixstatic.com/media/11062b_d597d0d6cf784815a5da80628721a74f~mv2_d_3504_2336_s_2.jpg/v1/fill/w_2306,h_805,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_d597d0d6cf784815a5da80628721a74f~mv2_d_3504_2336_s_2.jpg"
            alt="Cogs"
            style={{ width: '100%', height: 'auto' }}
          />
        </BackgroundContainer>
      </AnimatedSection>
      <AnimatedSection
        ref={ref5}
        inView={inView5}
        id="comp-ly3x945o29"
        bgColor={'#FFFEF8'}
      >
        <BackgroundContainer>
          <AnimatedText fontSize="26px">하우스 리모델링</AnimatedText>
          <AnimatedText fontSize="16px">2025년 1월 25일</AnimatedText>
          <AnimatedText fontSize="16px">
            고난이도 작업을 진행할 수 있는 검증된 기계 설치업자만을 찾으신다면,
            시간과 예산 등 여러 제약에도 불구하고 훌륭하게 완공된 이 프로젝트를
            살펴보세요.
          </AnimatedText>
        </BackgroundContainer>
        <BackgroundContainer>
          <AnimatedText fontSize="26px">배기관 점검</AnimatedText>
          <AnimatedText fontSize="16px">2025년 1월 25일</AnimatedText>
          <AnimatedText fontSize="16px">
            이 프로젝트는 예상치 못한 어려움이 있었지만 시간과 예산 범위 내에서
            성공적으로 완수시켰습니다. 여러 제약에도 불구하고 완성도 높은
            결과물을 고객에게 전달하여 최고의 만족을 끌어낼 수 있었습니다.
          </AnimatedText>
        </BackgroundContainer>
        <BackgroundContainer>
          <AnimatedText fontSize="26px">보일러 설치</AnimatedText>
          <AnimatedText fontSize="16px">2025년 1월 25일</AnimatedText>
          <AnimatedText fontSize="16px">
            고객님께서 경제적이면서도 친환경적인 건물을 원하셨던 프로젝트입니다.
            따라서 이 부분을 중점으로 공사 기간 내내 많은 노력을 기울였습니다.
          </AnimatedText>
        </BackgroundContainer>
      </AnimatedSection>
    </MainContentContainer>
  )
}

export default MainContentMobile
