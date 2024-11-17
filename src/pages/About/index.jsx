import React, { useState } from 'react'
import Section from '../../components/Section'
import styled from 'styled-components'

import InquirySection from '../../components/InquirySection'
import AboutSection from '../../components/AboutSection'
import History from '../../components/History'
import Gallery from '../../components/Gallery'

const GridSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px !important;
`

const BackgroundContainer = styled.div`
  width: 100%;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`

const Tab = styled.div`
  font-size: ${({ isMobile }) => (isMobile ? '20px' : '28px')};
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? '#222' : '#888')};
  cursor: pointer;
  text-shadow: ${({ isActive }) =>
    isActive ? '1px 1px 5px rgba(0, 0, 0, 0.2)' : 'none'};
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #222' : 'none')};
  padding: 10px 20px;
`

const About = (isMobile) => {
  const [activeTab, setActiveTab] = useState('about') // 초기 탭은 'about'

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
          <TabContainer>
            {/* ABOUT 탭 */}
            <Tab
              isMobile={isMobile}
              isActive={activeTab === 'about'}
              onClick={() => setActiveTab('about')}
            >
              CEO 인사말
            </Tab>
            {/* HISTORY 탭 */}
            <Tab
              isMobile={isMobile}
              isActive={activeTab === 'history'}
              onClick={() => setActiveTab('history')}
            >
              연혁
            </Tab>
            {/* 회사 전경 탭  */}
            <Tab
              isMobile={isMobile}
              isActive={activeTab === 'gallery'}
              onClick={() => setActiveTab('gallery')}
            >
              갤러리
            </Tab>
          </TabContainer>

          {/* 탭에 따라 내용 변경 */}
          {activeTab === 'about' && (
            <AboutSection isMobile={isMobile?.isMobile} />
          )}
          {activeTab === 'history' && <History isMobile={isMobile?.isMobile} />}
          {activeTab === 'gallery' && <Gallery isMobile={isMobile?.isMobile} />}

          {activeTab === 'history' ||
            (activeTab === 'gallery' && <InquirySection />)}
        </BackgroundContainer>
      </GridSection>
    </div>
  )
}

export default About
