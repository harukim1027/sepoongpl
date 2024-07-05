import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { styled, keyframes } from '@mui/system'

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
`

const Node = styled(Card)`
  margin: 10px;
  width: 150px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0; /* 초기 상태를 투명하게 설정 */
`

const Line = styled(Box)`
  width: 2px;
  height: 30px;
  background-color: #000;
  margin: 5px 0;
`

const HorizontalLine = styled(Box)`
  width: ${(props) => props.width || '100px'};
  height: 2px;
  background-color: #000;
`

const NodeGroup = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const OrgChart = () => {
  return (
    <OrgChartContainer>
      <Node delay={0.1}>
        <CardContent>
          <Typography variant="h6" component="div">
            조직도
          </Typography>
        </CardContent>
      </Node>
      <Line />
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
      <HorizontalLine width="300px" />
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
