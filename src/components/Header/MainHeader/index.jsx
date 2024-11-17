import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineMenu } from 'react-icons/hi' // 메뉴 아이콘 사용

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-size: cover;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ bgColor }) => bgColor};
  transition:
    top 0.3s ease,
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: ${({ isDark }) =>
    isDark ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`

const Logo = styled.img`
  cursor: pointer;
  width: 180px;
  margin-top: 5px;

  @media (max-width: 768px) {
    width: 150px;
  }
`

const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const MenuItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: all 0.3s ease;
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`

const MobileMenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)

      if (currentScrollY > 50) {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const handleLogoClick = () => {
    const ScrollToTop = () => {
      window.scrollTo(0, 0)
      return null
    }
    navigate('/')
    ScrollToTop()
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleMenuItemClick = (path) => {
    window.scrollTo(0, 0) // 메뉴 클릭 시 페이지 상단으로 이동

    navigate(path)
    setIsMobileMenuOpen(false) // 모바일 메뉴 닫기
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
          onClick={(event) => handleLogoClick(event)}
        />
        {/* PC 메뉴 */}
        <MenuContainer>
          <MenuItem onClick={() => handleMenuItemClick('/about')}>
            회사 소개
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/organization')}>
            조직도
          </MenuItem>
        </MenuContainer>
        {/* 모바일 메뉴 아이콘 */}
        <MenuIcon onClick={toggleMobileMenu}>
          <HiOutlineMenu size={30} />
        </MenuIcon>
      </HeaderContent>
      {/* 모바일 메뉴 */}
      <MobileMenu isOpen={isMobileMenuOpen} bgColor="#fffef8">
        <MobileMenuItem onClick={() => handleMenuItemClick('/about')}>
          회사 소개
        </MobileMenuItem>
        <MobileMenuItem onClick={() => handleMenuItemClick('/organization')}>
          조직도
        </MobileMenuItem>
      </MobileMenu>
    </HeaderContainer>
  )
}

export default Header
