import React from 'react'
import styled from 'styled-components'
import DropdownMenu from '../DropdownMenu'

const HeaderContainer = styled.header`
  position: fixed; /* 고정 위치 */
  top: 0; /* 상단에 고정 */
  left: 0;
  width: 100%;
  z-index: 1000; /* 다른 요소 위에 표시 */
  background-color: transparent; /* 배경색 제거 */
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: row; /* 모바일에서도 가로 배치 유지 */
    justify-content: space-between;
  }
`

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={require('../../../assets/images/mainLogo.png')}
          width={'200px'}
        />
        <DropdownMenu />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
