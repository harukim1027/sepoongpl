import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

const Section = styled.section`
  margin: 20px 0;
`

const Project = ({ title, date, description }) => (
  <Section>
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{description}</p>
  </Section>
)

const Projects = () => {
  return (
    <Container>
      <h2>Projects</h2>
      <Project
        title="하우스 리모델링"
        date="2025년 1월 25일"
        description="고난이도 작업을 훌륭하게 완공했습니다."
      />
      <Project
        title="배기관 점검"
        date="2025년 1월 25일"
        description="시간과 예산 범위 내에서 성공적으로 완수했습니다."
      />
      <Project
        title="보일러 설치"
        date="2025년 1월 25일"
        description="경제적이면서도 친환경적인 건물을 완성했습니다."
      />
    </Container>
  )
}

export default Projects
