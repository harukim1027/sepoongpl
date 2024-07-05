import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import MainContentMobile from './MainContentMobile'
import MainContentPC from './MainContentPC'

const MainContent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <MainContentMobile /> : <MainContentPC />
}

export default MainContent
