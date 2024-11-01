import React from 'react'
import styled from 'styled-components'

const InquiryContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #f9f9f9;

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    max-width: 320px;
    margin: 20px auto;
    padding: 15px;
  }
`

const InquiryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`

const InquiryDetail = styled.p`
  font-size: 16px;
  margin: 5px 0;

  /* 모바일 스타일 */
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 3px 0;
  }
`

const InquirySection = () => {
  return (
    <InquiryContainer>
      <InquiryTitle>견적문의</InquiryTitle>
      <InquiryDetail>TEL: 031)431-3965 , 031-431-3954</InquiryDetail>
      <InquiryDetail>FAX: 031)496-3954</InquiryDetail>
      <InquiryDetail>E-mail: sepoongpl2@nate.com</InquiryDetail>
    </InquiryContainer>
  )
}

export default InquirySection
