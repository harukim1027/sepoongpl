import React, { useEffect } from 'react'
import styled from 'styled-components'

const MapContainer = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  padding-bottom: 50%; /* Aspect Ratio 2:1 (for example, adjust as needed) */
  margin: 0 auto; /* 가로로 가운데 정렬 */

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 75%; /* Aspect Ratio 4:3 for smaller screens */
  }
`

const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const KakaoMap = () => {
  useEffect(() => {
    const apiKey = process.env.REACT_APP_KAKAO_MAP_API_KEY

    if (!apiKey) {
      console.error('Kakao Map API Key is missing')
      return
    }

    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`
    script.async = true
    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map')
        const options = {
          center: new window.kakao.maps.LatLng(37.328055, 126.739345), // 회사의 위도와 경도
          level: 3, // 지도의 확대 레벨
        }
        const map = new window.kakao.maps.Map(container, options)

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(
          37.328055,
          126.739345
        )
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
      })
    }

    return () => {
      if (script) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <MapContainer>
      <MapWrapper id="map" />
    </MapContainer>
  )
}

export default KakaoMap
