import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`

const Nav = styled.nav`
  & > a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
  }
`

const Header = ({ mainTitle, subTitles }) => {
  return (
    <HeaderContainer>
      <h1>{mainTitle}</h1>
      <Nav>
        {subTitles.map((title, index) => (
          <a key={index} href={`#${title.toLowerCase()}`}>
            {title}
          </a>
        ))}
      </Nav>
    </HeaderContainer>
  )
}

export default Header
