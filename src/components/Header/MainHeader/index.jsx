import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import DropdownMenu from '../DropdownMenu'

const HeaderContainer = styled.header`
  position: fixed; /* 고정 위치 */
  top: 0; /* 상단에 고정 */
  left: 0;
  width: 100%;
  z-index: 1000; /* 다른 요소 위에 표시 */
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-size: cover;
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
  color: ${({ isDark }) => (isDark ? 'white' : 'black')};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // 예: 스크롤에 따라 배경색 변경
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 50) {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <HeaderContainer bgColor={isDark ? 'black' : 'transparent'}>
      <HeaderContent>
        <img
          src={require('../../../assets/images/mainLogo.png')}
          width={'200px'}
          alt="Logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
        {/* <Title isDark={isDark}>세풍피엘</Title> */}
        <DropdownMenu />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
