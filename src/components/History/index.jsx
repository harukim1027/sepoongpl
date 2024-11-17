import React from 'react'
import styled, { keyframes } from 'styled-components'
import lightImg from '../../assets/images/light1.svg'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  margin: 0 auto; /* 화면 중앙 정렬 */
`

const Timeline = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align Circle */
`

const HistoryItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 30px 0; /* Vertical spacing */
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  opacity: 0;
  animation-delay: ${({ delay }) => delay}s;

  @media (max-width: 768px) {
    flex-direction: column; /* Mobile: stack vertically */
  }
`

const Circle = styled.div`
  width: 40px;
  height: 40px;
  background: url(${lightImg}) no-repeat center center;
  background-size: contain;

  border-radius: 50%;
  z-index: 1;
  @media (max-width: 768px) {
    margin: 10px 0;
    order: -1; /* 모바일에서는 Circle을 텍스트 위로 이동 */
  }
`

const YearTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ position }) =>
    position === 'left' ? 'flex-end' : 'flex-start'};
  text-align: ${({ position }) => (position === 'left' ? 'right' : 'left')};
  position: absolute;
  width: 45%;
  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')};

  @media (max-width: 768px) {
    position: static; /* Mobile: default position */
    width: 100%;
    text-align: center;
    align-items: center;
  }
`

const Year = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
const lineGrow = keyframes`
0% {
  height: 0;
}
100% {
  height: 100%;
}
`
const Line = styled.div`
  position: absolute;
  top: 50px; /* Align with the bottom of the Circle */
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background-color: #ccc;
  height: 0;
  animation-fill-mode: forwards; /* 애니메이션 종료 후 상태 유지 */

  animation: ${lineGrow} 0.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay}s;
  z-index: -1;
`

const HistoryItem = ({ year, text, delay, position, isLast, isMobile }) => (
  <HistoryItemContainer delay={delay}>
    {position === 'left' && (
      <YearTextContainer position="left">
        <Year>{year}</Year>
        <Text>{text}</Text>
      </YearTextContainer>
    )}
    <Circle />
    {!isLast && !isMobile && <Line delay={delay + 0.5} />}
    {/* 마지막 아이템이 아닐 때만 Line 렌더링 */}
    {position === 'right' && (
      <YearTextContainer position="right">
        <Year>{year}</Year>
        <Text>{text}</Text>
      </YearTextContainer>
    )}
  </HistoryItemContainer>
)

const History = ({ isMobile }) => {
  const events = [
    {
      year: '2002 , 09',
      text: '세풍 P,L 설립 경기도 안산시 단원구 별망로 79번길 110',
      delay: 0,
      position: 'left',
    },
    {
      year: '2003 , 01',
      text: '흙막이 ( Slide Pannel System) 개발',
      delay: 0.5,
      position: 'right',
    },
    {
      year: '2003 , 06',
      text: '흙막이 ( Slide Pannel System) 생산',
      delay: 1,
      position: 'left',
    },
    {
      year: '2016 , 01',
      text: '㈜ 세풍피엘 법인전환 임상덕 대표이사 취임',
      delay: 1.5,
      position: 'right',
    },
    {
      year: '2019 , 02',
      text: '공장 확장 이전 경기도 안산시 단원구 번영2로안길 41 (시화공단 4다 101-3)',
      delay: 2,
      position: 'left',
    },
  ]

  return (
    <Container>
      <Timeline>
        {events.map((event, index) => (
          <HistoryItem
            isMobile={isMobile}
            key={index}
            year={event.year}
            text={event.text}
            delay={event.delay}
            position={event.position}
            isLast={index === events.length - 1} // 마지막 아이템 여부 전달
          />
        ))}
      </Timeline>
    </Container>
  )
}

export default History
