import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const up01 = keyframes`
  0% { transform: translateY(-100%); }
  100%, 60%, 20% { transform: translateY(0); }
  40% { transform: translateY(-40%); }
  80% { transform: translateY(-20%); }
`

const up02 = keyframes`
  0% { transform: translateY(-100%) rotate(360deg); }
  100%, 60%, 20% { transform: translateY(0) rotate(0); }
  40% { transform: translateY(-20%) rotate(140deg); }
  80% { transform: translateY(-10%) rotate(30deg); }
`

const up03 = keyframes`
  0% { transform: translateY(-100%); }
  100%, 60%, 20% { transform: translateY(0); }
  40% { transform: translateY(-10%); }
  80% { transform: translateY(-4%); }
`

const left = keyframes`
  0% { transform: translateX(20%) rotate(180deg); }
  100% { transform: translateX(0) rotate(0); }
`

const right = keyframes`
  0% { transform: translateX(-100%) rotate(-720deg); }
  100%, 83%, 49%, 16% { transform: translateX(0) rotate(0); }
  33% { transform: translateX(-25%) rotate(-180deg); }
  66% { transform: translateX(-15%) rotate(-40deg); }
`

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
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
    cursor: pointer;
    &.active {
      background-color: #ddd;
      border-radius: 5px;
    }
  }
`

const SvgContainer = styled.div`
  display: ${({ active }) => (active ? 'block' : 'none')};
  text-align: center;
`

const AnimatedGroup = styled.g`
  &.item01 {
    animation: ${up01} 2s cubic-bezier(0.5, 1, 0.89, 1) both;
  }
  &.item02 {
    animation: ${up02} 2s 1s cubic-bezier(0.5, 1, 0.89, 1) both;
    transform-origin: 558px 412px;
  }
  &.item03 {
    animation: ${up03} 0.5s 2s cubic-bezier(0.25, 1, 0.5, 1) both;
  }
  &.item04 {
    animation: ${left} 1s 1s cubic-bezier(0.5, 1, 0.89, 1) both;
    transform-origin: 1307px 509.5px;
  }
  &.item05 {
    animation: ${right} 1.5s 1.5s cubic-bezier(0.5, 1, 0.89, 1) both;
    transform-origin: 56.74% 69.5%;
  }
`

const Products = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    '# Single Slide System',
    '# Double Slide System',
    '# TS Pannel 사각기초',
    '# 산업기계 및 철골 제작, 설치',
  ]

  const svgs = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1435 620"
      style={{ enableBackground: 'new 0 0 1435 620' }}
    >
      <style type="text/css">
        {`
          .st001{fill:#27B2EC;}
          .st002{fill:#FFFFFF;}
          .st003{font-family:'RedHatDisplay-Regular';}
          .st004{font-size:20px;}
          .st005{fill:#1AA9AE;}
          .st006{fill:#082284;}
          .st007{fill:#136ABF;}
        `}
      </style>
      <AnimatedGroup id="item01" className="item01">
        <g>
          <circle className="st001" cx="1306.5" cy="509.5" r="110.5"></circle>
          <text
            transform="matrix(1 0 0 1 1265.1108 515.46)"
            className="st002 st003 st004"
          >
            Base Plate
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item02" className="item02">
        <g>
          <path
            className="st005"
            d="M802.5,557.13L802.5,557.13c-58-72.34-46.38-178.01,25.97-236.01l270.51-216.89 c72.34-58,178.01-46.38,236.01,25.97l0,0c58,72.34,46.38,178.01-25.97,236.01l-270.51,216.89 C966.17,641.09,860.5,629.47,802.5,557.13z"
          ></path>
          <text
            transform="matrix(0.7802 -0.6255 0.6255 0.7802 1037.3167 376.4959)"
            className="st002 st003 st004"
          >
            Top Plate
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item03" className="item03">
        <g>
          <circle className="st006" cx="560.5" cy="413.5" r="206.5"></circle>
          <text
            transform="matrix(1 0 0 1 486.5808 419.46)"
            className="st002 st003 st004"
          >
            Rolling Strut
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item04" className="item04">
        <g>
          <path
            className="st007"
            d="M334,620H38c-11.05,0-20-8.96-20-20V152c0-11.05,8.96-20,20-20H334c11.05,0,20,8.96,20,20V600 C354,611.04,345.04,620,334,620z"
          ></path>
          <text
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 191.96 445.9985)"
            className="st002 st003 st004"
          >
            Rail
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item05" className="item05">
        <g>
          <path
            className="st007"
            d="M334,620H38c-11.05,0-20-8.96-20-20V152c0-11.05,8.96-20,20-20H334c11.05,0,20,8.96,20,20V600 C354,611.04,345.04,620,334,620z"
          ></path>
          <text
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 191.96 445.9985)"
            className="st002 st003 st004"
          >
            Distance Piece
          </text>
        </g>
      </AnimatedGroup>
      <g>
        <g>
          <path
            className="st007"
            d="M334,620H38c-11.05,0-20-8.96-20-20V152c0-11.05,8.96-20,20-20H334c11.05,0,20,8.96,20,20V600 C354,611.04,345.04,620,334,620z"
          ></path>
          <text
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 191.96 445.9985)"
            className="st009 st010 st011"
          >
            Limit Pin
          </text>
        </g>
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1435 620"
      style={{ enableBackground: 'new 0 0 1435 620' }}
    >
      <style type="text/css">
        {`
          .st008{fill:#4878DA;}
          .st009{fill:#FFFFFF;}
          .st010{font-family:'RedHatDisplay-Regular';}
          .st011{font-size:20px;}
          .st012{fill:#60CADD;}
          .st013{fill:#6E35D6;}
        `}
      </style>
      <AnimatedGroup id="item01" className="item01">
        <g>
          <circle className="st008" cx="1306.5" cy="509.5" r="110.5"></circle>
          <text
            transform="matrix(1 0 0 1 1265.1108 515.46)"
            className="st009 st010 st011"
          >
            Base Plate
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item02" className="item02">
        <g>
          <path
            className="st012"
            d="M802.5,557.13L802.5,557.13c-58-72.34-46.38-178.01,25.97-236.01l270.51-216.89 c72.34-58,178.01-46.38,236.01,25.97l0,0c58,72.34,46.38,178.01-25.97,236.01l-270.51,216.89 C966.17,641.09,860.5,629.47,802.5,557.13z"
          ></path>
          <text
            transform="matrix(0.7802 -0.6255 0.6255 0.7802 1037.3167 376.4959)"
            className="st009 st010 st011"
          >
            Top Plate
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item03" className="item03">
        <g>
          <circle className="st013" cx="560.5" cy="413.5" r="206.5"></circle>
          <text
            transform="matrix(1 0 0 1 486.5808 419.46)"
            className="st009 st010 st011"
          >
            Rolling Strut
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item04" className="item04">
        <g>
          <path
            className="st013"
            d="M334,620H38c-11.05,0-20-8.96-20-20V152c0-11.05,8.96-20,20-20H334c11.05,0,20,8.96,20,20V600 C354,611.04,345.04,620,334,620z"
          ></path>
          <text
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 191.96 445.9985)"
            className="st009 st010 st011"
          >
            Rail
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item05" className="item05">
        <g>
          <path
            className="st013"
            d="M334,620H38c-11.05,0-20-8.96-20-20V152c0-11.05,8.96-20,20-20H334c11.05,0,20,8.96,20,20V600 C354,611.04,345.04,620,334,620z"
          ></path>
          <text
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 191.96 445.9985)"
            className="st009 st010 st011"
          >
            Distance Piece
          </text>
        </g>
      </AnimatedGroup>
      <g>
        <g>
          <path
            className="st013"
            d="M334,620H38c-11.05,0-20-8.96-20-20V152c0-11.05,8.96-20,20-20H334c11.05,0,20,8.96,20,20V600 C354,611.04,345.04,620,334,620z"
          ></path>
          <text
            transform="matrix(6.123234e-17 -1 1 6.123234e-17 191.96 445.9985)"
            className="st009 st010 st011"
          >
            Limit Pin
          </text>
        </g>
      </g>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1435 620"
      style={{ enableBackground: 'new 0 0 1435 620' }}
    >
      <style type="text/css">
        {`
          .st014{fill:#3CAACA;}
          .st015{fill:#FFFFFF;}
          .st016{font-family:'RedHatDisplay-Regular';}
          .st017{font-size:20px;}
          .st018{fill:#243CB2;}
          .st019{fill:#19285F;}
          .st020{fill:#0054A6;}
        `}
      </style>
      <AnimatedGroup id="item01" className="item01">
        <g>
          <ellipse
            transform="matrix(0.9327 -0.3607 0.3607 0.9327 -84.9943 505.6153)"
            className="st014"
            cx="1312.28"
            cy="480.55"
            rx="96.93"
            ry="144.7"
          ></ellipse>
          <text
            transform="matrix(0.3607 0.9327 -0.9327 0.3607 1281.5458 417.585)"
            className="st015 st016 st017"
          >
            Base Plate
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item02" className="item02">
        <g>
          <path
            className="st018"
            d="M573.89,615.87l-214.9-164.68c-8.77-6.72-10.43-19.27-3.71-28.04L521.61,206.1 c6.72-8.77,19.27-10.43,28.04-3.71l214.9,164.68c8.77,6.72,10.43,19.27,3.71,28.04L601.93,612.16 C595.21,620.93,582.66,622.59,573.89,615.87z"
          ></path>
          <text
            transform="matrix(0.7937 0.6082 -0.6082 0.7937 527.236 390.1767)"
            className="st015 st016 st017"
          >
            Top Plate
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item03" className="item03">
        <g>
          <path
            className="st019"
            d="M184.5,620L184.5,620C92.54,620,18,545.46,18,453.5v-240C18,121.54,92.54,47,184.5,47h0 C276.46,47,351,121.54,351,213.5v240C351,545.46,276.46,620,184.5,620z"
          ></path>
          <text
            transform="matrix(1 0 0 1 99.801 336.71)"
            className="st015 st016 st017"
          >
            Corner Rail
          </text>
        </g>
      </AnimatedGroup>
      <AnimatedGroup id="item04" className="item04">
        <g>
          <circle className="st020" cx="991" cy="401" r="219"></circle>
          <text
            transform="matrix(1 0 0 1 912.491 406.96)"
            className="st015 st016 st017"
          >
            Rail Connector
          </text>
        </g>
      </AnimatedGroup>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1435 620"
      style={{ enableBackground: 'new 0 0 1435 620' }}
    >
      <style type="text/css">
        {`
          .st021{fill:#00274D;}
          .st022{fill:#FFFFFF;}
          .st023{font-family:'RedHatDisplay-Regular';}
          .st024{font-size:20px;}
          .st025{fill:#9B72EF;}
          .st026{fill:#29ABDB;}
          .st027{fill:#0054A6;}
        `}
      </style>
      <AnimatedGroup id="item01" className="item01">
        <g>
          <circle className="st021" cx="858.23" cy="518.14" r="102"></circle>
          <text
            transform="matrix(0.953 -0.3029 0.3029 0.953 787.6918 546.8103)"
            className="st022 st023 st024"
          >
            산업기계 및 철골 제작, 설치
          </text>
        </g>
      </AnimatedGroup>
    </svg>,
  ]

  return (
    <Container>
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
      {svgs.map((svg, index) => (
        <SvgContainer key={index} active={activeTab === index}>
          {svg}
        </SvgContainer>
      ))}
    </Container>
  )
}

export default Products
