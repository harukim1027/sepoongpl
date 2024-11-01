import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 40px 0;
  background-color: #3a4461; /* 배경색 설정 */
  color: #ffffff;
  font-size: 14px;

  text-align: center;
`

const Info = styled.div`
  margin-bottom: 20px;
  font-size: 14px;

  dl {
    margin-bottom: 10px;
    dt {
      font-weight: bold;
      margin-bottom: 5px;
    }
    dd {
      margin: 0;
      line-height: 1.6;
    }
  }
`

const Copy = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #cccccc;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Info>
        <dl>
          <dt>찾아오는길</dt>
          <dd>본사 및 공장</dd>
        </dl>
        <dl>
          <dt>주 소</dt>
          <dd>경기도 안산시 단원구 번영2로 안길41 (시화공단 4다 101-3)</dd>
        </dl>
        <dl>
          <dt>TEL</dt>
          <dd>031-431-3965 , 031-431-3954</dd>
        </dl>
        <dl>
          <dt>FAX</dt>
          <dd>031-496-3954</dd>
        </dl>
        <dl>
          <dt>E-mail</dt>
          <dd>sepoongpℓ2@nate.com</dd>
        </dl>
      </Info>
      <Copy>© 2002 SepoongPL Co., Ltd. All rights reserved.</Copy>
    </FooterContainer>
  )
}

export default Footer
