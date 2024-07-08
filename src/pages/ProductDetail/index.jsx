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

const GridSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px !important;
  margin-top: 100px !important;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) =>
    props.inView ? 'translateY(0)' : 'translateY(50px)'};
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
`

const BackgroundContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  align-items: center;
  text-align: center;
`

const DetailContent = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 1.5;
  color: #333;
  text-align: center;
`

const ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`
const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
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
const StyledVerticalLine = styled.div`
  width: 3px;
  height: 40px;
  background-color: #5d5aa1;
  margin: 20px 0;
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
    font-size: 24px;
    cursor: pointer;
    &.active {
      background-color: #ddd;
      border-radius: 5px;
    }
  }
`
const StyledHR = styled.hr`
  border: 0;
  height: 1px;
  width: 40%;
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

const ProductDetail = () => {
  const { id } = useParams()
  const productIndex = parseInt(id, 10) - 1

  const [activeTab, setActiveTab] = useState(productIndex)

  const tabs = [
    '# Single Slide System',
    '# Double Slide System',
    '# TS Panel 사각기초 기본형',
    '# TS Panel 사각기초 확장형',

    '# 산업기계 및 철골 제작, 설치',
  ]

  const details = [
    `싱글 슬라이드 시스템은 단일 방향으로 슬라이드하는 구조로 설계된 흙막이 공법입니다.<br/> 이 시스템은 설치와 사용이 간편하며, 공간을 효율적으로 활용할 수 있는 장점이 있습니다. 주로 좁은 공간이나 제한된 면적에서 사용되며, 소규모 건설 현장에서 매우 유용합니다.<br/> 흙을 지지하여 지반이동을 방지하고 안정성을 유지하는데 탁월한 성능을 발휘합니다.<br/><br/>
설치 과정은 비교적 간단하며, 신속한 설치가 가능하여 공사 기간을 단축할 수 있습니다.<br/> 이 시스템은 부드럽고 안정적인 움직임을 제공하여 작업자의 안전을 보장합니다. <br/>또한, 유지보수가 용이하며, 비용 효율적인 솔루션을 찾고 있는 고객에게 최적입니다. <br/>단순한 구조로 인해 초기 비용이 적게 들고, 설치 후 유지보수 비용도 낮아 경제적인 측면에서도 유리합니다.<br/><br/>`,
    `더블 슬라이드 시스템은 양방향으로 슬라이드할 수 있는 구조로, 대형 건설 현장에서 특히 유용합니다.<br/> 이 시스템은 넓은 개방 영역을 제공하여 대형 장비의 출입이 용이하며, 더 많은 공간을 확보할 수 있습니다.<br/> 두 방향으로 자유롭게 이동할 수 있어 작업의 효율성을 극대화하며, 특히 대규모 토공 작업에 적합합니다.<br/><br/>
이 시스템은 강력한 지지력을 제공하여 대규모 흙막이 공사에서 안정성을 보장합니다. <br/>견고한 설계로 오랜 기간 안정적으로 사용할 수 있으며, 지반의 이동을 최소화하여 구조물의 안전을 확보합니다.<br/> 상업용 빌딩이나 대형 토목 공사에서 많이 사용되며, 복잡한 구조물의 흙막이 작업에서도 뛰어난 성능을 발휘합니다.<br/> 또한, 유연한 설계로 다양한 환경과 조건에 맞춰 조정할 수 있어 매우 실용적입니다.<br/><br/>`,
    `사각 기초 기본형 시스템은 기본적인 사각형 구조의 흙막이 기초 시스템으로, 다양한 환경에서 안정적이고 견고한 기초 구조를 제공합니다.<br/> 이 시스템은 설치가 비교적 간단하며, 경제적인 비용으로 높은 효율성을 제공합니다.<br/> 주택 건설부터 소규모 상업용 건물까지 다양한 용도로 사용할 수 있으며, 안정적인 기초 지지력을 통해 지반의 붕괴를 방지합니다.<br/><br/>
설치 과정은 신속하고 간단하여 공사 기간을 단축할 수 있습니다.<br/> 이 시스템은 다양한 지반 조건에서도 뛰어난 성능을 발휘하며, 지반의 특성에 맞춰 조정이 가능합니다.<br/> 기본형 시스템은 중소형 건설 프로젝트에 적합하며, 초기 비용이 낮아 경제적입니다.<br/> 또한, 유지보수가 용이하여 장기적인 비용 절감 효과도 기대할 수 있습니다.<br/><br/>`,
    `사각 기초 확장형 시스템은 기본형 시스템을 확장하여 더 큰 하중을 견딜 수 있도록 설계된 흙막이 기초 시스템입니다.<br/> 이 시스템은 대형 건축물이나 복잡한 구조의 기초로 사용되며, 유연한 설계로 다양한 요구사항에 맞출 수 있습니다.<br/> 확장형 시스템은 강력한 지지력과 내구성을 제공하여 고층 건물이나 대규모 공사에서 안정성을 보장합니다.<br/><br/>
이 시스템은 대규모 건설 프로젝트에서 특히 유용하며, 지반의 특성에 맞춰 조정이 가능합니다.<br/> 다양한 요구사항에 맞춰 설계할 수 있어 고객의 다양한 필요를 충족할 수 있습니다.<br/> 확장형 시스템은 고급 건축물이나 특별한 요구를 가진 프로젝트에 이상적이며, 복잡한 구조물의 흙막이 작업에서도 뛰어난 성능을 발휘합니다.<br/><br/>
또한, 이 시스템은 견고하고 안정적인 구조를 제공하여 장기간 사용이 가능하며, 유지보수 비용이 낮아 경제적입니다.<br/> 초기 설치 비용은 높을 수 있지만, 장기적으로 보면 안정성과 내구성에서 큰 이점을 제공하여 전체적인 비용 절감 효과를 기대할 수 있습니다.<br/><br/>`,

    `저희 회사는 다양한 산업기계 및 철골 제작과 설치 서비스를 제공합니다. <br/><br/>
산업기계 제작: 각종 산업현장에서 필요한 기계를 설계, 제작, 설치하는 서비스를 제공합니다.<br/> 맞춤형 설계를 통해 고객의 특정 요구 사항을 충족시키며, 최신 기술을 적용하여 효율성과 생산성을 극대화합니다.<br/> 엄격한 품질 관리 과정을 통해 높은 신뢰성과 내구성을 보장합니다.<br/><br/>
철골 제작 및 설치: 건축물의 뼈대를 이루는 철골 구조물을 제작, 설치하는 서비스를 제공합니다. 정확한 설계와 정밀한 제작 과정을 통해 안정적이고 견고한 구조를 구현합니다.<br/> 다양한 형태와 크기의 철골 구조물을 신속하게 설치할 수 있으며, 각종 건설 프로젝트에서 효율적인 공정을 지원합니다.<br/><br/>
저희의 산업기계 및 철골 제작, 설치 서비스는 고객의 다양한 요구를 충족시키기 위해 고품질의 자재와 최신 기술을 활용하여 제공됩니다.<br/> 각 프로젝트의 특성과 요구 사항을 면밀히 분석하여 최적의 솔루션을 제공하며, 안전하고 신속한 작업을 보장합니다.
 `,
  ]

  const images = [
    [detailImage1_1, detailImage1_2],
    [detailImage2_1, detailImage2_2],
    [detailImage3_1, detailImage3_2],
    [detailImage4_1, detailImage4_2],
    ['', ''],
  ]

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
                }}
              >
                PRODUCTS
              </span>
            </span>
          </h2>
          <br className="wixui-rich-text__text" />
          <br className="wixui-rich-text__text" />

          <br className="wixui-rich-text__text" />

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
          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{ fontSize: '28px', width: '100%', textAlign: 'center' }}
            >
              <span
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: '600',
                  fontSize: '28px',
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                * PRODUCT IMAGES
              </span>
            </span>
          </h2>
          <StyledVerticalLine />
          <ImagesColumn>
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

          <br className="wixui-rich-text__text" />

          <br className="wixui-rich-text__text" />
          <StyledHR50 />

          <h2
            className="font_2 wixui-rich-text__text"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <span
              className="wixui-rich-text__text"
              style={{ fontSize: '28px', width: '100%', textAlign: 'center' }}
            >
              <span
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  fontWeight: '600',
                  fontSize: '28px',
                  color: '#222',
                  textAlign: 'center',
                }}
              >
                * PRODUCT DESCRIPTION
              </span>
            </span>
          </h2>
          <StyledVerticalLine />

          <DetailContent
            dangerouslySetInnerHTML={{ __html: details[activeTab] }}
          />
          <InquirySection />
        </BackgroundContainer>
      </GridSection>
    </div>
  )
}

export default ProductDetail
