export interface AddressSearchProps {
  address: string
  setAddress: (jibunAddress: string) => void
  setRoadAddress: (roadAddress: string) => void
  setLatitude: (latitude: number) => void
  setLongitude: (longitude: number) => void
}

export interface DaumPostcodeData {
  jibunAddress: string
  roadAddress: string
}
