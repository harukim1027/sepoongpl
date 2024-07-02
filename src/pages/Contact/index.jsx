import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

const Contact = () => {
  return (
    <Container>
      <h2>Contact Us</h2>
      <p>전화번호: 123-456-7890</p>
      <p>이메일: info@mysite.com</p>
      <p>주소: 대한민국 경기도 안산시 단원구 번영2로</p>
    </Container>
  )
}

export default Contact
