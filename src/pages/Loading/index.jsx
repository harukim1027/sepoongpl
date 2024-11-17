import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingPage = () => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  )
}

// 스타일 정의
const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
  border: 4px solid #ccc;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`

const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 1.2em;
  color: #333;
`

export default LoadingPage
