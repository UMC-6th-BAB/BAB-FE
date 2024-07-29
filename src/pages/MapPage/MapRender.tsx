import Map from '@components/MapCard/GoogleMapCard/Map'
import SearchBar from '@components/MapCard/SearchCard/SearchBar'
import AfterSearchBar from '@components/MapCard/SearchCard/AfterSearchBar'
import { searchStore } from '@stores/searchStore'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>
    case Status.FAILURE:
      return <>에러 발생</>
    case Status.SUCCESS:
      return null
    default:
      return null
  }
}

export default function MapRender() {
  const { searchValue } = searchStore()

  return (
    <Wrapper apiKey={import.meta.env.VITE_API_KEY} render={render}>
      {searchValue === '' ? <SearchBar /> : <AfterSearchBar />}
      <Map />
    </Wrapper>
  )
}
