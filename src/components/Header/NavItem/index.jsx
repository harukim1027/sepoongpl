import React from 'react'
import styled from 'styled-components'

const NavItemContainer = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
  line-height: 32px;
  text-align: left;
  font-family: 'Red Hat Display', sans-serif;
`

const NavItemLabel = styled.p`
  text-align: left;
  line-height: 32px;
  margin: 0;
  font-family: 'Red Hat Display', sans-serif;

  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color }) => color || '#fff'};

  @media (max-width: 768px) {
    font-size: ${({ smallScreenFontSize }) => smallScreenFontSize || '18px'};
  }

  @media (max-width: 480px) {
    font-size: ${({ smallerScreenFontSize }) =>
      smallerScreenFontSize || '20px'};
  }
`

const NavItem = ({
  href,
  label,
  fontSize,
  smallScreenFontSize,
  smallerScreenFontSize,
  color,
}) => {
  return (
    <NavItemContainer href={href}>
      <NavItemLabel
        fontSize={fontSize}
        smallScreenFontSize={smallScreenFontSize}
        smallerScreenFontSize={smallerScreenFontSize}
        color={color}
      >
        {label}
      </NavItemLabel>
    </NavItemContainer>
  )
}

export default NavItem
