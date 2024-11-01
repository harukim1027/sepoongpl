import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor || '#FFFEF8'};
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`

const Section = ({ id, children, bgColor }) => {
  return (
    <SectionContainer id={id} bgColor={bgColor}>
      {children}
    </SectionContainer>
  )
}

export default Section
