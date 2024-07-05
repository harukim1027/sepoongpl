import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  padding: 20px;
  background-color: ${({ bgColor }) => bgColor || '#001350'};
  width: 100vw;
`

const MobileSection = ({ id, children, bgColor }) => {
  return (
    <SectionContainer id={id} bgColor={bgColor}>
      {children}
    </SectionContainer>
  )
}

export default MobileSection
