import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

const Section = styled.section`
  margin: 20px 0;
`

const Home = () => {
  return (
    <Container>
      <Section>
        <h2>Welcome to Our Company</h2>
        <p>전문 설치 전문가입니다. 문의해 주세요.</p>
      </Section>
      <Section>
        <h2>우리의 전문성</h2>
        <p>2000년부터 서울특별시 지역 최고의 기계 설치업자입니다.</p>
      </Section>
    </Container>
  )
}

export default Home
