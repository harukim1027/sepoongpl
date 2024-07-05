import React from 'react'
import styled from 'styled-components'
import '../../styles/styles.css'

const BackgroundContainer = styled.div`
  position: relative;
  background-color: var(--wst-color-fill-background-primary);
  padding: 20px;
  box-sizing: border-box;

  #comp-ly3x945u {
    --min-height: 21px;
    height: var(--height);
    --height: ${({ compLy3x945uHeight }) => compLy3x945uHeight || '27px'};
  }

  #comp-ly3x945v15 {
    --min-height: 24px;
    height: var(--height);
    --height: ${({ compLy3x945v15Height }) => compLy3x945v15Height || '39px'};
  }

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`

const Background = ({ children, compLy3x945uHeight, compLy3x945v15Height }) => {
  return (
    <BackgroundContainer
      compLy3x945uHeight={compLy3x945uHeight}
      compLy3x945v15Height={compLy3x945v15Height}
    >
      {children}
    </BackgroundContainer>
  )
}

export default Background
