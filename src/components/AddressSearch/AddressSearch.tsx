import { useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
import {
  StyledAddressButton,
  StyledAddressInput,
  StyledModalBackground,
  StyledModalContent,
  StyledRowDiv,
} from './AddressSearch.style'
import {
  AddressSearchProps,
  DaumPostcodeData,
} from 'src/types/AddressSearchTypes'

export const AddressSearch = ({
  address,
  setAddress,
  setRoadAddress,
  setLatitude,
  setLongitude,
}: AddressSearchProps) => {
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
            setLatitude(coords.getLat())
            setLongitude(coords.getLng())
          } else {
            console.error('getCoordinates 에러', status)
          }
        },
      )
    }
  }

  const handleComplete = (data: DaumPostcodeData) => {
    setAddress(data.jibunAddress)
    setRoadAddress(data.roadAddress)
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
