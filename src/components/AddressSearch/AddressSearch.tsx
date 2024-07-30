import { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import {
  StyledAddressButton,
  StyledAddressInput,
  StyledModalBackground,
  StyledModalContent,
  StyledRowDiv,
} from './AddressSearch.style'

interface AddressSearchProps {
  address: string
  setAddress: (address: string) => void
}

interface DaumPostcodeData {
  address: string
  roadAddress: string
}

export const AddressSearch = ({ address, setAddress }: AddressSearchProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [postcodeKey, setPostcodeKey] = useState(0)

  const getCoordinates = (roadAddress: string) => {
    if (window.kakao) {
      const geocoder = new kakao.maps.services.Geocoder()

      geocoder.addressSearch(
        roadAddress,
        function (
          result: kakao.maps.services.GeocoderResult[],
          status: kakao.maps.services.Status,
        ) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(
              Number(result[0].y),
              Number(result[0].x),
            )
            console.log('위도:', coords.getLat())
            console.log('경도:', coords.getLng())
            // 콘솔 pr 올리기 전에 삭제하겠습니다
          } else {
            console.error('getCoordinates 에러', status)
          }
        },
      )
    }
  }

  const handleComplete = (data: DaumPostcodeData) => {
    console.log('주소:', data.address)
    console.log('도로명 주소:', data.roadAddress)
    setAddress(data.address)
    setIsModalOpen(false)
    getCoordinates(data.roadAddress)
  }
  const openModal = () => {
    setIsModalOpen(true)
    setPostcodeKey((prevKey) => prevKey + 1)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const closeModalOnBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  return (
    <>
      <StyledRowDiv>
        <StyledAddressInput
          type="text"
          placeholder="기본 주소"
          value={address}
          readOnly
        />
        <StyledAddressButton onClick={openModal}>주소 검색</StyledAddressButton>
      </StyledRowDiv>
      {isModalOpen && (
        <StyledModalBackground
          $isOpen={isModalOpen}
          onClick={closeModalOnBackgroundClick}
        >
          <StyledModalContent>
            <img
              src="//t1.daumcdn.net/postcode/resource/images/close.png"
              alt="닫기"
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: 0,
                right: 0,
              }}
              onClick={closeModal}
            />
            <DaumPostcode key={postcodeKey} onComplete={handleComplete} />
          </StyledModalContent>
        </StyledModalBackground>
      )}
    </>
  )
}
