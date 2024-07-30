declare namespace kakao.maps {
  namespace services {
    class Geocoder {
      addressSearch(
        address: string,
        callback: (result: GeocoderResult[], status: Status) => void,
      ): void
    }

    interface GeocoderResult {
      address_name: string
      y: string
      x: string
    }

    enum Status {
      OK = 'OK',
      ZERO_RESULT = 'ZERO_RESULT',
      ERROR = 'ERROR',
    }
  }

  class LatLng {
    constructor(lat: number, lng: number)
    getLat(): number
    getLng(): number
  }
}
