import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ bgColor }) => bgColor};
  background-size: cover;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition:
    top 0.3s ease,
    /* 헤더가 위아래로 이동할 때의 애니메이션 */ background-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${({ isDark }) =>
    isDark ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'}; /* 스크롤 시 그림자 */

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
    justify-content: center; /* 모바일에서 로고를 가운데 정렬 */
    padding: 0 15px; /* 좌우 패딩 조정 */
  }
`

const Logo = styled.img`
  cursor: pointer;
  width: 200px; /* 기본 로고 크기 */

  @media (max-width: 768px) {
    width: 150px; /* 모바일에서 로고 크기를 줄임 */
  }
`

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // 스크롤을 내릴 때, 헤더 숨김
        setIsVisible(false)
      } else {
        // 스크롤을 위로 올릴 때, 헤더 표시
        setIsVisible(true)
      }

      // 스크롤 위치 저장
      setLastScrollY(currentScrollY)

      // 헤더 배경색 변경 (스크롤이 50px 이상이면)
      if (currentScrollY > 50) {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }

    // 스크롤 이벤트 추가
    window.addEventListener('scroll', handleScroll)

    return () => {
      // 컴포넌트 언마운트 시 이벤트 제거
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <HeaderContainer
      bgColor={!isDark ? 'transparent' : '#fffef8'}
      isDark={isDark}
      isVisible={isVisible}
    >
      <HeaderContent>
        <Logo
          src={require('../../../assets/images/mainLogo.png')}
          alt="Logo"
          onClick={handleLogoClick}
        />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
