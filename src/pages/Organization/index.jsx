import React from 'react'
import Section from '../../components/Section'
import styled from 'styled-components'

import InquirySection from '../../components/InquirySection'
import OrgChart from '../../components/OrgChart'

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

const Organization = (isMobile) => {
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
              fontSize: isMobile ? '28px' : '70px',
              fontWeight: 'bold',
              color: '#222',
              marginTop: '40px',
              marginBottom: '40px',
              textShadow: `1px 1px 5px rgba(0, 0, 0, 0.2)`,
            }}
          >
            ORGANIZATION
          </h2>

          <StyledHR />
          <OrgChart />
          <InquirySection />
        </BackgroundContainer>
      </GridSection>
    </div>
  )
}

export default Organization
