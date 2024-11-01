import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { styled, keyframes } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const OrgChartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`

const Node = styled(Card)`
  margin: 10px;
  width: 180px;
  text-align: center;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100px; /* 모바일에서 노드 크기 줄임 */
  }
`

const Line = styled(Box)`
  width: 2px;
  height: 40px;
  background-color: #607d8b;
  margin: 5px 0;

  @media (max-width: 768px) {
    height: 30px;
  }
`

const HorizontalLine = styled(Box)`
  width: ${(props) => props.width || '100px'};
  height: 2px;
  background-color: #607d8b;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 150px;
  }
`

const NodeGroup = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap; /* 플렉스 요소가 화면 크기에 맞게 자동으로 줄바꿈되도록 설정 */

  @media (max-width: 768px) {
    flex-wrap: nowrap; /* 모바일에서도 가로로 유지 */
    gap: 10px;
  }
`

const OrgChart = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <OrgChartContainer>
      <Node delay={0.2}>
        <CardContent>
          <Typography variant="h6" component="div">
            대 표 이 사
          </Typography>
        </CardContent>
      </Node>
      <Line />
      <Node delay={0.3}>
        <CardContent>
          <Typography variant="h6" component="div">
            감 사
          </Typography>
        </CardContent>
      </Node>
      <HorizontalLine width={isMobile ? '150px' : '300px'} />
      <NodeGroup>
        <Node delay={0.4}>
          <CardContent>
            <Typography variant="h6" component="div">
              관<br />리<br />팀
            </Typography>
          </CardContent>
        </Node>
        <Node delay={0.5}>
          <CardContent>
            <Typography variant="h6" component="div">
              기<br />술<br />팀
            </Typography>
          </CardContent>
        </Node>
        <Node delay={0.6}>
          <CardContent>
            <Typography variant="h6" component="div">
              생<br />산<br />팀
            </Typography>
          </CardContent>
        </Node>
      </NodeGroup>
    </OrgChartContainer>
  )
}

export default OrgChart
