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
  margin: 0 auto; /* 화면 중앙 정렬 */
`

const Timeline = styled.div`
  position: relative;
  width: 100%;
`

const HistoryItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  opacity: 0;
  animation-delay: ${({ delay }) => delay}s;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row-reverse' : 'row'};

  @media (max-width: 768px) {
    flex-direction: column; /* 모바일에서는 세로 배치 */
    margin: 10px 0;
  }
`

const YearTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ position }) =>
    position === 'left' ? 'flex-end' : 'flex-start'};
  text-align: ${({ position }) => (position === 'left' ? 'right' : 'left')};
  position: absolute;
  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
  width: 45%;

  @media (max-width: 768px) {
    position: static; /* 모바일에서는 절대 위치 제거 */
    width: 100%;
    text-align: center; /* 모바일에서는 중앙 정렬 */
    align-items: center;
  }

  @media (max-width: 400px) {
    font-size: 12px; /* 작은 화면에서 폰트 크기 줄임 */
  }
`

const Year = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 400px) {
    font-size: 16px; /* 더 작은 화면에서 폰트 크기 줄임 */
  }
`

const Text = styled.div`
  font-size: 16px;
  margin-top: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px; /* 작은 화면에서 폰트 크기 줄임 */
  }
`

const Circle = styled.div`
  width: 31px;
  height: 31px;
  margin-top: 20px;
  margin-bottom: 20px;
  background: url(${lightImg}) no-repeat center center;
  background-size: contain;
  position: relative;

  @media (max-width: 768px) {
    margin: 10px 0;
    order: -1; /* 모바일에서는 Circle을 텍스트 위로 이동 */
  }
`

const HistoryItem = ({ year, text, delay, position, index }) => {
  return (
    <HistoryItemContainer delay={delay} position={position}>
      <Circle index={index} />
      <YearTextContainer position={position}>
        <Year>{year}</Year>
        <Text>{text}</Text>
      </YearTextContainer>
    </HistoryItemContainer>
  )
}

const History = () => {
  const events = [
    {
      year: '2002 , 09',
      text: '세풍 P,L 설립 경기도 안산시 단원구 별망로 79번길 110',
      delay: 0,
      position: 'right',
    },
    {
      year: '2003 , 01',
      text: '흙막이 ( Slide Pannel System) 개발',
      delay: 0.5,
      position: 'left',
    },
    {
      year: '2003 , 06',
      text: '흙막이 ( Slide Pannel System) 생산',
      delay: 1,
      position: 'right',
    },
    {
      year: '2016 , 01',
      text: '㈜ 세풍피엘 법인전환 임상덕 대표이사 취임',
      delay: 1.5,
      position: 'left',
    },
    {
      year: '2019 , 02',
      text: '공장 확장 이전 경기도 안산시 단원구 번영2로안길 41 (시화공단 4다 101-3)',
      delay: 2,
      position: 'right',
    },
  ]

  return (
    <Container>
      <Timeline>
        {events.map((event, index) => (
          <HistoryItem
            key={index}
            year={event.year}
            text={event.text}
            delay={event.delay}
            position={event.position}
            index={index}
          />
        ))}
      </Timeline>
    </Container>
  )
}

export default History
