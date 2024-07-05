import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  padding: 80px 0;
  border-top: 1px solid #e5e5e5;
  &.bgb {
    border-top: 1px solid #ffffff50;
    .info dl dt,
    .info dl dd,
    .link li a,
    .copy {
      color: #fff;
    }
    .info dl dt,
    .link li a {
      opacity: 0.5;
    }
    .info dl dd {
      opacity: 0.8;
    }
    .copy {
      opacity: 0.4;
    }
  }
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
    align-items: flex-end;
  }
`

const Info = styled.address`
  display: flex;
  dl {
    margin-right: 100px;
    &:last-of-type {
      margin-right: 0;
    }
    dt {
      font-family: 'Cormorant', serif;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 15px;
      color: #333;
      margin-bottom: 10px;
    }
    dd {
      font-family: 'Red Hat Display', 'Noto Sans KR', sans-serif;
      font-size: 18px;
      letter-spacing: 0.05em;
      color: #333;
      line-height: 1.5;
      &:first-of-type {
        font-family:
          Pretendard,
          -apple-system,
          BlinkMacSystemFont,
          system-ui,
          Roboto,
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          sans-serif;
      }
    }
  }
`

const LinkList = styled.ul`
  li {
    text-align: right;
    margin-bottom: 24px;
    &:last-of-type {
      margin-bottom: 0;
    }
    a {
      font-family: 'Cormorant', serif;
      font-weight: 600;
      font-size: 18px;
      color: #333;
      text-transform: uppercase;
      &:first-of-type {
        color: #999;
      }
      img {
        position: relative;
        top: 4px;
      }
    }
  }
`

const Copy = styled.p`
  font-family: 'Red Hat Display', 'Noto Sans KR', sans-serif;
  font-size: 16px;
  color: #aaa;
`

const SnsList = styled.ul`
  display: flex;
  li {
    margin-right: 25px;
    &:last-of-type {
      margin-right: 0;
    }
    a img {
      // Add any additional styling here
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer className="footer bgb">
      <div className="w1820">
        <Box>
          <Info className="info">
            <dl>
              <dt>Address</dt>
              <dd>
                서울특별시 강남구 논현동
                <br /> 학동로25길 11 씨플레이스 4층
              </dd>
            </dl>
            <dl>
              <dt>Tel</dt>
              <dd>02-544-4456</dd>
            </dl>
            <dl>
              <dt>FAX</dt>
              <dd>02-6929-2630</dd>
            </dl>
            <dl>
              <dt>E-mail</dt>
              <dd>webmoa@webmoa.co.kr</dd>
            </dl>
          </Info>
          <LinkList className="link">
            <li>
              <a href="/download/Brochure.pdf" download="">
                Brochure{' '}
                <img
                  src="/img/common/icon_sub_footer_down.png"
                  alt="브로슈어 다운로드 아이콘"
                />
              </a>
            </li>
            <li>
              <a href="/sub/policy/privacy.asp">Privacy &amp; Terms</a>
            </li>
          </LinkList>
        </Box>
        <Box>
          <Copy className="copy">
            © 2022 Webmoa Co., Ltd. All rights reserved.
          </Copy>
          <SnsList className="sns">
            <li>
              <a
                href="https://blog.naver.com/webmoa_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/common/icon_sub_sns01.png" alt="네이버 블로그" />
                <span className="clip">네이버 블로그</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/webmoa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/common/icon_sub_sns02.png" alt="인스타그램" />
                <span className="clip">인스타그램</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/webmoa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/common/icon_sub_sns03.png" alt="페이스북" />
                <span className="clip">페이스북</span>
              </a>
            </li>
            <li>
              <a
                href="https://post.naver.com/webmoa_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/img/common/icon_sub_sns04.png" alt="네이버 포스트" />
                <span className="clip">네이버 포스트</span>
              </a>
            </li>
          </SnsList>
        </Box>
      </div>
    </FooterContainer>
  )
}

export default Footer
