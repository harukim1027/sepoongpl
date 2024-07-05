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
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

const Year = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const Text = styled.div`
  font-size: 16px;
  margin-top: 30px;
`

const Circle = styled.div`
  width: 31px;
  height: 31px;
  margin-top: 20px;
  margin-bottom: 20px;

  background: url(${lightImg}) no-repeat center center;
  background-size: contain;
  position: relative;
`

const HistoryItem = ({ year, text, delay, position, index }) => {
  return (
    <HistoryItemContainer delay={delay} position={position}>
      <YearTextContainer position={position}>
        <Year>{year}</Year>
        <Text>{text}</Text>
      </YearTextContainer>
      <Circle index={index} />
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
