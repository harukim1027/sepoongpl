import React, { useEffect } from 'react'
import styled from 'styled-components'

const MapContainer = styled.div`
  width: 98%; /* 화면의 전체 너비를 사용 */
  height: 350px;
  margin-top: 40px;

  @media (max-width: 768px) {
    height: 300px; /* 모바일에서는 높이를 조금 줄임 */
  }

  @media (max-width: 480px) {
    height: 250px; /* 더 작은 화면에서는 높이를 더 줄임 */
  }

  @media (max-width: 430px) {
    width: 100%; /* 430px 이하에서는 화면 너비를 가득 채움 */
  }
`

const KakaoMap = () => {
  const apiKey = '3ef92bacedb1f63ae7aa69feaea576b1'

  useEffect(() => {
    const loadKakaoMap = () => {
      if (window.kakao && window.kakao.maps) {
        const mapContainer = document.getElementById('map')
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.316462, 126.73878), // 지도 중심 좌표
          level: 3, // 지도 확대 레벨 (1로 하면 너무 확대됨)
        }

        // 지도 생성
        const map = new window.kakao.maps.Map(mapContainer, mapOption)

        // 마커가 표시될 위치 (해당 좌표에 핀을 찍음)
        const markerPosition = new window.kakao.maps.LatLng(
          37.316462,
          126.73878
        )

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })

        // 마커를 지도에 표시
        marker.setMap(map)
      } else {
        console.error('Kakao Maps API가 로드되지 않았습니다.')
      }
    }

    // Kakao Maps API 로드
    const kakaoScript = document.createElement('script')
    kakaoScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    kakaoScript.async = true
    kakaoScript.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(loadKakaoMap) // API 로드 후 지도를 초기화
      }
    }
    document.head.appendChild(kakaoScript)

    return () => {
      document.head.removeChild(kakaoScript)
    }
  }, [apiKey])

  return <MapContainer id="map" />
}

export default KakaoMap
