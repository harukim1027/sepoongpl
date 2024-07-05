import React from 'react'
import styled from 'styled-components'

const DropdownMenuContainer = styled.div`
  position: relative;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`

const Li = styled.li`
  position: relative;
  margin-right: 15px;
`

const Link = styled.a`
  text-decoration: none;
  font-size: ${({ fontSize }) => fontSize || '16px'};
  color: ${({ color }) => color || '#fff'};
  font-family: 'Red Hat Display', sans-serif;

  @media (max-width: 768px) {
    font-size: ${({ smallScreenFontSize }) => smallScreenFontSize || '18px'};
  }

  @media (max-width: 480px) {
    font-size: ${({ smallerScreenFontSize }) =>
      smallerScreenFontSize || '20px'};
  }
`

const DropdownMenu = () => {
  return (
    <DropdownMenuContainer>
      <Nav>
        <Ul>
          <Li>
            <Link
              href="https://editor.wix.com/html/editor/web/renderer/render/document/1bbf3143-5ff2-4b02-a070-8f3f5fb0f9bf"
              fontSize="18px"
              smallScreenFontSize="16px"
              smallerScreenFontSize="14px"
              color="#000"
            >
              메인
            </Link>
          </Li>
          <Li>
            <Link
              href="https://editor.wix.com/html/editor/web/renderer/render/document/1bbf3143-5ff2-4b02-a070-8f3f5fb0f9bf/book-online"
              fontSize="18px"
              smallScreenFontSize="16px"
              smallerScreenFontSize="14px"
              color="#000"
            >
              온라인 예약
            </Link>
          </Li>
        </Ul>
      </Nav>
    </DropdownMenuContainer>
  )
}

export default DropdownMenu
