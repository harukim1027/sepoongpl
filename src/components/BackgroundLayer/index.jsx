import React from 'react'
import styled from 'styled-components'

const BackgroundLayerContainer = styled.div`
  position: relative;
`

const ColorUnderlay = styled.div``

const BackgroundLayer = ({ children }) => (
  <BackgroundLayerContainer>
    <ColorUnderlay />
    {children}
  </BackgroundLayerContainer>
)

export default BackgroundLayer
