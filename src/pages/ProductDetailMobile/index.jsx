import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Section from '../../components/Section'
import styled from 'styled-components'
import detailImage1_1 from '../../assets/images/detail1_1.png'
import detailImage2_1 from '../../assets/images/detail2_1.png'
import detailImage3_1 from '../../assets/images/detail3_1.png'
import detailImage4_1 from '../../assets/images/detail4_1.png'
import detailImage1_2 from '../../assets/images/3dImage1.png'
import detailImage2_2 from '../../assets/images/3dImage2.png'
import detailImage3_2 from '../../assets/images/3dImage3.png'
import detailImage4_2 from '../../assets/images/3dImage4.png'
import InquirySection from '../../components/InquirySection'

const MobileGridSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
`

const MobileBackgroundContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`

const MobileDetailContent = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 2;
  color: #333;
  text-align: center;
  width: 100%;
`

const MobileTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const MobileTab = styled.div`
  font-size: 20px;
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`

const NavigationButton = styled.button`
  margin: 10px 5px;
  padding: 8px 16px;
  font-size: 20px;
  color: black;
  margin-top: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 2%;

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }
`

const MobileStyledVerticalLine = styled.div`
  width: 2px;
  height: 20px;
  background-color: #5d5aa1;
  margin: 10px 0;
`

const MobileImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`

const MobileStyledHR = styled.hr`
  border: 0;
  height: 1px;
  width: 80%;
  background: #3a4461;
  margin: 20px auto;
`

const ProductDetailMobile = () => {
  const { id } = useParams()
  const productIndex = parseInt(id, 10) - 1
  const [activeTab, setActiveTab] = useState(productIndex)

  const tabs = [
    'Single Slide System',
    'Double Slide System',
    'TS Panel 사각기초 기본형',
    'TS Panel 사각기초 확장형',
    '산업기계 및 철골 제작, 설치',
  ]

  const details = [
    `싱글 슬라이드 시스템은 단일 방향으로 슬라이드하는 구조로 설계된 흙막이 공법입니다. 이 시스템은 설치와 사용이 간편하며, 공간을 효율적으로 활용할 수 있는 장점이 있습니다. 주로 좁은 공간이나 제한된 면적에서 사용되며, 소규모 건설 현장에서 매우 유용합니다. 흙을 지지하여 지반 이동을 방지하고 안정성을 유지하는 데 탁월한 성능을 발휘합니다.`,
    `더블 슬라이드 시스템은 양방향으로 슬라이드할 수 있는 구조로, 대형 건설 현장에서 특히 유용합니다. 이 시스템은 넓은 개방 영역을 제공하여 대형 장비의 출입이 용이하며, 더 많은 공간을 확보할 수 있습니다. 두 방향으로 자유롭게 이동할 수 있어 작업의 효율성을 극대화하며, 특히 대규모 토공 작업에 적합합니다.`,
    `사각 기초 기본형 시스템은 기본적인 사각형 구조의 흙막이 기초 시스템으로, 다양한 환경에서 안정적이고 견고한 기초 구조를 제공합니다. 이 시스템은 설치가 비교적 간단하며, 경제적인 비용으로 높은 효율성을 제공합니다.`,
    `사각 기초 확장형 시스템은 기본형 시스템을 확장하여 더 큰 하중을 견딜 수 있도록 설계된 흙막이 기초 시스템입니다. 이 시스템은 대형 건축물이나 복잡한 구조의 기초로 사용되며, 유연한 설계로 다양한 요구 사항에 맞출 수 있습니다.`,
    `저희 회사는 다양한 산업 기계 및 철골 제작과 설치 서비스를 제공합니다. 산업 기계 제작부터 철골 구조물의 제작과 설치까지 다양한 서비스를 제공합니다. 맞춤형 설계를 통해 고객의 특정 요구 사항을 충족시키며, 최신 기술을 적용하여 효율성과 생산성을 극대화할 수 있습니다.`,
  ]

  const images = [
    [detailImage1_1, detailImage1_2],
    [detailImage2_1, detailImage2_2],
    [detailImage3_1, detailImage3_2],
    [detailImage4_1, detailImage4_2],
    ['', ''],
  ]

  const handleNext = () => setActiveTab((prev) => (prev + 1) % tabs.length)
  const handlePrevious = () =>
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '80px',
      }}
    >
      <MobileGridSection id="comp-ly3x945m1" bgColor={'#FFFEF8'}>
        <MobileBackgroundContainer>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#222',
              width: '100%',
              textAlign: 'center',
            }}
          >
            PRODUCTS
          </h2>
          <MobileTabContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '320px',
              }}
            >
              <NavigationButton
                onClick={handlePrevious}
                disabled={activeTab === 0}
              >
                {`<`}
              </NavigationButton>
              <MobileTab isActive>{tabs[activeTab]}</MobileTab>

              <NavigationButton
                onClick={handleNext}
                disabled={activeTab === tabs.length - 1}
              >
                {`>`}
              </NavigationButton>
            </div>
          </MobileTabContainer>
          <MobileStyledHR />

          {/* 마지막 탭이 아닐 때만 이미지 섹션을 렌더링 */}
          {activeTab !== tabs.length - 1 && (
            <>
              <h2
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#222',
                  width: '100%',
                  textAlign: 'center',
                }}
              >
                * PRODUCT IMAGES
              </h2>
              <MobileStyledVerticalLine />
              {images[activeTab].map(
                (image, idx) =>
                  image && (
                    <MobileImgContainer key={idx}>
                      <img
                        src={image}
                        alt={`Product image ${activeTab + 1}_${idx + 1}`}
                      />
                    </MobileImgContainer>
                  )
              )}
              <MobileStyledHR />
            </>
          )}
          <h2
            style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#222',
              width: '100%',
              textAlign: 'center',
            }}
          >
            * PRODUCT DESCRIPTION
          </h2>
          <MobileStyledVerticalLine />
          <MobileDetailContent
            dangerouslySetInnerHTML={{ __html: details[activeTab] }}
          />
          <InquirySection />
        </MobileBackgroundContainer>
      </MobileGridSection>
    </div>
  )
}

export default ProductDetailMobile
