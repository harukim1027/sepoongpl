import React from 'react'
import styled from 'styled-components'
import NavItem from '../NavItem'
import '../../../styles/styles.css'

const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: 'Red Hat Display', sans-serif;
`

const Nav = ({ navItems }) => {
  return (
    <NavContainer>
      {navItems.map((item, index) => (
        <NavItem
          fontSize="18px"
          smallScreenFontSize="16px"
          smallerScreenFontSize="14px"
          id="comp-ly3x944t41"
          key={index}
          href={item.href}
          label={item.label}
        />
      ))}
    </NavContainer>
  )
}

export default Nav
