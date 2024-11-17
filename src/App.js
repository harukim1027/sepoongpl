import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Header from './components/Header/MainHeader'

import styled, { createGlobalStyle } from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery'
import MainContentPC from './components/MainContent/MainContentPC'
import MainContentMobile from './components/MainContent/MainContentMobile'
import Footer from './components/Footer'
import ProductDetail from './pages/ProductDetail'
import ProductDetailMobile from './pages/ProductDetailMobile'
import Organization from './pages/Organization'
import About from './pages/About'

const GlobalStyle = createGlobalStyle`
  a,abbr,acronym,address,applet,b,big,blockquote,button,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,footer,form,h1,h2,h3,h4,h5,h6,header,i,iframe,img,ins,kbd,label,legend,li,nav,object,ol,p,pre,q,s,samp,section,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,title,tr,tt,u,ul,var {
    background: transparent;
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }

  input,select,textarea {
    box-sizing: border-box;
    font-family: 'Red Hat Display', sans-serif;
  }

  ol,ul {
    list-style: none;
  }

  blockquote,q {
    quotes: none;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  .testStyles {
    overflow-y: hidden;
  }

  .reset-button {
    -webkit-appearance: none;
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    outline: 0;
    overflow: visible;
    padding: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  :focus {
    outline: none;
  }

  #site-root {
    margin: 0 auto;
    min-height: 100%;
    position: relative;
    top: var(--wix-ads-height);
  }

  #site-root img:not([src]) {
    visibility: hidden;
  }

  #site-root svg img:not([src]) {
    visibility: visible;
  }

  .auto-generated-link {
    color: inherit;
  }

  #SCROLL_TO_BOTTOM,#SCROLL_TO_TOP {
    height: 0;
  }

  .has-click-trigger {
    cursor: pointer;
  }

  .fullScreenOverlay {
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    overflow-y: hidden;
    position: fixed;
    right: 0;
    top: -60px;
    z-index: 1005;
  }

  .fullScreenOverlay>.fullScreenOverlayContent {
    bottom: 0;
    left: 0;
    margin: 0 auto;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 60px;
    transform: translateZ(0);
  }

  [data-mesh-id$=centeredContent],[data-mesh-id$=form],[data-mesh-id$=inlineContent] {
    pointer-events: none;
    position: relative;
  }

  [data-mesh-id$=-gridWrapper],[data-mesh-id$=-rotated-wrapper] {
    pointer-events: none;
  }

  [data-mesh-id$=-gridContainer]>*,[data-mesh-id$=-rotated-wrapper]>*,[data-mesh-id$=inlineContent]>:not([data-mesh-id$=-gridContainer]) {
    pointer-events: auto;
  }

  .device-mobile-optimized #masterPage.mesh-layout #SOSP_CONTAINER_CUSTOM_ID {
    grid-area: 2/1/3/2;
    -ms-grid-row: 2;
    position: relative;
  }

  #masterPage.mesh-layout {
    -ms-grid-rows: max-content max-content min-content max-content;
    -ms-grid-columns: 100%;
    align-items: start;
    display: -ms-grid;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: max-content max-content min-content max-content;
    justify-content: stretch;
  }

  #masterPage.mesh-layout #PAGES_CONTAINER,#masterPage.mesh-layout #SITE_FOOTER-placeholder,#masterPage.mesh-layout #SITE_FOOTER_WRAPPER,#masterPage.mesh-layout #SITE_HEADER-placeholder,#masterPage.mesh-layout #SITE_HEADER_WRAPPER,#masterPage.mesh-layout #SOSP_CONTAINER_CUSTOM_ID[data-state~=mobileView],#masterPage.mesh-layout #soapAfterPagesContainer,#masterPage.mesh-layout #soapBeforePagesContainer {
    -ms-grid-row-align: start;
    -ms-grid-column-align: start;
    -ms-grid-column: 1;
  }

  #masterPage.mesh-layout #SITE_HEADER-placeholder,#masterPage.mesh-layout #SITE_HEADER_WRAPPER {
    grid-area: 1/1/2/2;
    -ms-grid-row: 1;
  }

  #masterPage.mesh-layout #PAGES_CONTAINER,#masterPage.mesh-layout #soapAfterPagesContainer,#masterPage.mesh-layout #soapBeforePagesContainer {
    grid-area: 3/1/4/2;
    -ms-grid-row: 3;
  }

  #masterPage.mesh-layout #soapAfterPagesContainer,#masterPage.mesh-layout #soapBeforePagesContainer {
    width: 100%;
  }

  #masterPage.mesh-layout #PAGES_CONTAINER {
    align-self: stretch;
  }

  #masterPage.mesh-layout main#PAGES_CONTAINER {
    display: block;
  }

  #masterPage.mesh-layout #SITE_FOOTER-placeholder,#masterPage.mesh-layout #SITE_FOOTER_WRAPPER {
    grid-area: 4/1/5/2;
    -ms-grid-row: 4;
  }

  #masterPage.mesh-layout #SITE_PAGES,#masterPage.mesh-layout [data-mesh-id=PAGES_CONTAINERcenteredContent],#masterPage.mesh-layout [data-mesh-id=PAGES_CONTAINERinlineContent] {
    height: 100%;
  }

  #masterPage.mesh-layout.desktop>* {
    width: 100%;
  }

  #masterPage.mesh-layout #PAGES_CONTAINER,#masterPage.mesh-layout #SITE_FOOTER_WRAPPER,#masterPage.mesh-layout #SITE_HEADER_WRAPPER,#masterPage.mesh-layout #SITE_PAGES,#masterPage.mesh-layout #masterPageinlineContent,#masterPage.mesh-layout:not(.one-doc) #SITE_FOOTER,#masterPage.mesh-layout:not(.one-doc) #SITE_HEADER {
    position: relative;
  }

  #masterPage.mesh-layout.remove-wrappers #SITE_HEADER {
    grid-area: 1/1/2/2;
  }

  #masterPage.mesh-layout.remove-wrappers #SITE_FOOTER {
    grid-area: 4/1/5/2;
  }

  [data-z-counter] {
    z-index: 0;
  }

  [data-z-counter="0"] {
    z-index: auto;
  }

  .wixSiteProperties {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --wst-button-color-fill-primary: rgb(var(--color_48));
    --wst-button-color-border-primary: rgb(var(--color_49));
    --wst-button-color-text-primary: rgb(var(--color_50));
    --wst-button-color-fill-primary-hover: rgb(var(--color_51));
    --wst-button-color-border-primary-hover: rgb(var(--color_52));
    --wst-button-color-text-primary-hover: rgb(var(--color_53));
    --wst-button-color-fill-primary-disabled: rgb(var(--color_54));
    --wst-button-color-border-primary-disabled: rgb(var(--color_55));
    --wst-button-color-text-primary-disabled: rgb(var(--color_56));
    --wst-button-color-fill-secondary: rgb(var(--color_57));
    --wst-button-color-border-secondary: rgb(var(--color_58));
    --wst-button-color-text-secondary: rgb(var(--color_59));
    --wst-button-color-fill-secondary-hover: rgb(var(--color_60));
    --wst-button-color-border-secondary-hover: rgb(var(--color_61));
    --wst-button-color-text-secondary-hover: rgb(var(--color_62));
    --wst-button-color-fill-secondary-disabled: rgb(var(--color_63));
    --wst-button-color-border-secondary-disabled: rgb(var(--color_64));
    --wst-button-color-text-secondary-disabled: rgb(var(--color_65));
    --wst-color-fill-base-1: rgb(var(--color_36));
    --wst-color-fill-base-2: rgb(var(--color_37));
    --wst-color-fill-base-shade-1: rgb(var(--color_38));
    --wst-color-fill-base-shade-2: rgb(var(--color_39));
    --wst-color-fill-base-shade-3: rgb(var(--color_40));
    --wst-color-fill-accent-1: rgb(var(--color_41));
    --wst-color-fill-accent-2: rgb(var(--color_42));
    --wst-color-fill-accent-3: rgb(var(--color_43));
    --wst-color-fill-accent-4: rgb(var(--color_44));
    --wst-color-fill-background-primary: rgb(var(--color_11));
    --wst-color-fill-background-secondary: rgb(var(--color_12));
    --wst-color-text-primary: rgb(var(--color_15));
    --wst-color-text-secondary: rgb(var(--color_14));
    --wst-color-action: rgb(var(--color_18));
    --wst-color-disabled: rgb(var(--color_39));
    --wst-color-title: rgb(var(--color_45));
    --wst-color-subtitle: rgb(var(--color_46));
    --wst-color-line: rgb(var(--color_47));
    --wst-font-style-h2: var(--font_2);
    --wst-font-style-h3: var(--font_3);
    --wst-font-style-h4: var(--font_4);
    --wst-font-style-h5: var(--font_5);
    --wst-font-style-h6: var(--font_6);
    --wst-font-style-body-large: var(--font_7);
    --wst-font-style-body-medium: var(--font_8);
    --wst-font-style-body-small: var(--font_9);
    --wst-font-style-body-x-small: var(--font_10);
  }
`

const AppContainer = styled.div`
  background-color: #fffef8;
  margin: 0 auto;
  width: 100%;

  /* 적절한 화면 크기에서만 패딩 조정 */
  @media (min-width: 1200px) {
    padding: 0;
  }

  /* 768px 이하 화면에서 폰트 크기 조정 */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  /* 576px 이하 화면에서 폰트 크기 조정 */
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }

  /* 400px 이하 화면에서 폰트 크기 조정 */
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`

// 스크롤을 맨 위로 이동시키는 컴포넌트
const ScrollToTop = () => {
  const { pathname } = useLocation()

  console.log(pathname, '음?')
  useEffect(() => {
    // 페이지 이동 또는 새로고침 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  useEffect(() => {
    // 새로고침 시 스크롤을 맨 위로 이동
    const handleRefresh = () => window.scrollTo(0, 0)
    window.addEventListener('beforeunload', handleRefresh)

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('beforeunload', handleRefresh)
    }
  }, [])

  const isMobile = useMediaQuery('(max-width: 768px)')
  // useEffect(() => {
  //   // 환경 변수에서 Kakao API 키를 가져오기
  //   const kakaoMapApiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY

  //   // Kakao Map API 스크립트 동적 로드
  //   const script = document.createElement('script')
  //   script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapApiKey}`
  //   script.async = true
  //   document.head.appendChild(script)

  //   // 정리 함수
  //   return () => {
  //     document.head.removeChild(script)
  //   }
  // }, [])

  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Header bgColor={'#fffef8'} />
        <AppContainer>
          <Routes>
            <Route
              path="/"
              element={isMobile ? <MainContentMobile /> : <MainContentPC />}
            />

            <Route
              path="/product/:id"
              element={isMobile ? <ProductDetailMobile /> : <ProductDetail />}
            />
            <Route
              path="/organization"
              element={<Organization isMobile={isMobile} />}
            />
            <Route path="/about" element={<About isMobile={isMobile} />} />
          </Routes>
        </AppContainer>
        <Footer />
      </Router>
    </>
  )
}

export default App
