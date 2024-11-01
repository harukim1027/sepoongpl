import React, { useState, useEffect } from 'react'
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

const GridSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px !important;
  margin-top: 100px !important;
`

const BackgroundContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const StyledHR = styled.hr`
  border: 0;
  height: 1px;
  width: 70%;
  background: #3a4461;
  margin: 30px auto;
`

const StyledHR50 = styled.hr`
  border: 0;
  height: 0.5px;
  width: 30%;
  background: #3a4461;
  margin: 30px auto;
  opacity: 0.1;
`
const StyledVerticalLine = styled.div`
  width: 3px;
  height: 40px;
  background-color: #5d5aa1;
  margin: 20px 0;
`

const DetailContent = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 2;
  color: #333;
  text-align: center;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transform: ${(props) =>
    props.isLoading ? 'translateY(20px)' : 'translateY(0)'};
`

const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transform: ${(props) =>
    props.isLoading ? 'translateY(20px)' : 'translateY(0)'};
`

const ImgContainer = styled.div`
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #5d5aa1;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  list-style: none;
  padding: 0;

  li {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    &.active {
      background-color: #ddd;
      border-radius: 5px;
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
    }
  }
`

const ProductDetail = () => {
  const { id } = useParams()
  const productIndex = parseInt(id, 10) - 1
  const [activeTab, setActiveTab] = useState(productIndex)
  const [loading, setLoading] = useState(false)

  const tabs = [
    'Single Slide System',
    'Double Slide System',
    'TS Panel 사각기초 기본형',
    'TS Panel 사각기초 확장형',
    '산업기계 및 철골 제작, 설치',
  ]

  const details = [
    `싱글 슬라이드 시스템은 단일 방향으로 슬라이드하는 구조로 설계된 흙막이 공법입니다.<br/> 이 시스템은 설치와 사용이 간편하며, 공간을 효율적으로 활용할 수 있는 장점이 있습니다.<br/> 주로 좁은 공간이나 제한된 면적에서 사용되며, 소규모 건설 현장에서 매우 유용합니다.<br/> 흙을 지지하여 지반 이동을 방지하고 안정성을 유지하는 데 탁월한 성능을 발휘합니다.<br/><br/>`,

    `더블 슬라이드 시스템은 양방향으로 슬라이드할 수 있는 구조로, 대형 건설 현장에서 특히 유용합니다.<br/> 이 시스템은 넓은 개방 영역을 제공하여 대형 장비의 출입이 용이하며, 더 많은 공간을 확보할 수 있습니다.<br/> 두 방향으로 자유롭게 이동할 수 있어 작업의 효율성을 극대화하며, 특히 대규모 토공 작업에 적합합니다.<br/><br/>`,

    `사각 기초 기본형 시스템은 기본적인 사각형 구조의 흙막이 기초 시스템으로,<br/> 다양한 환경에서 안정적이고 견고한 기초 구조를 제공합니다.<br/> 이 시스템은 설치가 비교적 간단하며, 경제적인 비용으로 높은 효율성을 제공합니다.<br/><br/>`,

    `사각 기초 확장형 시스템은 기본형 시스템을 확장하여 더 큰 하중을 견딜 수 있도록 설계된 흙막이 기초 시스템입니다.<br/> 이 시스템은 대형 건축물이나 복잡한 구조의 기초로 사용되며, 유연한 설계로 다양한 요구 사항에 맞출 수 있습니다.<br/><br/>`,

    `저희 회사는 다양한 산업 기계 및 철골 제작과 설치 서비스를 제공합니다.<br/><br/>
    산업 기계 제작: 각종 산업현장에서 필요한 기계를 설계, 제작, 설치하는 서비스를 제공합니다.<br/> 맞춤형 설계를 통해 고객의 특정 요구 사항을 충족시키며,<br/> 최신 기술을 적용하여 효율성과 생산성을 극대화할 수 있습니다.<br/><br/>
    철골 구조물 제작 및 설치: 건축물의 뼈대를 이루는 철골 구조물을 제작, 설치하는 서비스를 제공합니다.<br/> 정확한 설계와 정밀한 제작을 통해 안정적이고 견고한 구조를 구현합니다.<br/><br/>
    저희의 산업 기계 및 철골 제작, 설치 서비스는 고품질 자재와 최신 기술을 활용하여 제공되며,<br/> 각 프로젝트의 특성과 요구 사항을 면밀히 분석하여 최적의 솔루션을 제공합니다.`,
  ]

  const images = [
    [detailImage1_1, detailImage1_2],
    [detailImage2_1, detailImage2_2],
    [detailImage3_1, detailImage3_2],
    [detailImage4_1, detailImage4_2],
    [], // 마지막 탭은 이미지가 없음
  ]

  const loadImages = () => {
    setLoading(true)
    const imageLoaders = images[activeTab].map((image) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = image
        img.onload = resolve
      })
    })

    Promise.all(imageLoaders).then(() => setLoading(false))
  }

  useEffect(() => {
    loadImages()
  }, [activeTab])

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <GridSection id="comp-ly3x945m1" bgColor={'#FFFEF8'}>
        <BackgroundContainer>
          <h2
            style={{
              fontSize: '70px',
              fontWeight: 'bold',
              color: '#222',
              marginTop: '40px',
              marginBottom: '40px',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
            }}
          >
            PRODUCTS
          </h2>

          <Tabs>
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={activeTab === index ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </li>
            ))}
          </Tabs>
          <StyledHR />
          {loading ? (
            <Loader />
          ) : (
            <>
              {images[activeTab].length > 0 && (
                <>
                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#222',
                      marginTop: '40px',
                      marginBottom: '40px',
                      textShadow: `1px 1px 5px rgba(0, 0, 0, 0.1)`,
                    }}
                  >
                    * PRODUCT IMAGES
                  </h2>
                  <StyledVerticalLine />

                  <ImagesColumn isLoading={loading}>
                    {images[activeTab].map(
                      (image, idx) =>
                        image && (
                          <ImgContainer key={idx}>
                            <img
                              src={image}
                              alt={`Product image ${activeTab + 1}_${idx + 1}`}
                            />
                          </ImgContainer>
                        )
                    )}
                  </ImagesColumn>
                  <StyledHR50 />
                </>
              )}
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#222',
                  marginTop: '60px',
                  marginBottom: '40px',
                  textShadow: `1px 1px 5px rgba(0, 0, 0, 0.1)`,
                }}
              >
                * PRODUCT DESCRIPTION
              </h2>
              <StyledVerticalLine />

              <DetailContent
                dangerouslySetInnerHTML={{ __html: details[activeTab] }}
                isLoading={loading}
              />
            </>
          )}
          <InquirySection />
        </BackgroundContainer>
      </GridSection>
    </div>
  )
}

export default ProductDetail
