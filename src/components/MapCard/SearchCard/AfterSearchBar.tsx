import {
  AfterSearchBarContainer,
  AfterSearchBarContentWrapper,
  AfterSearchBarIconWrapper,
  AfterSearchBarDiscountStyle,
  AfterSearchBarDiscountWrapper,
  AfterSearchBarWrapper,
} from '@components/MapCard/SearchCard/SearchBar.style'

import AfterDiscountBar from '@components/MapCard/DiscountCard/AfterDiscountBar'
import { IoIosArrowBack } from 'react-icons/io'

type Props = {
  searchValue: string
  handleFilterCheck: () => void
  handleSearchValue: (value: string) => void
}

export default function AfterSearchBar({
  handleFilterCheck,
  searchValue,
  handleSearchValue,
}: Props) {
  return (
    <AfterSearchBarContainer>
      <AfterSearchBarWrapper>
        <AfterSearchBarIconWrapper
          onClick={() => {
            handleSearchValue('')
          }}
        >
          <IoIosArrowBack />
        </AfterSearchBarIconWrapper>
        <AfterSearchBarContentWrapper>
          {searchValue}
        </AfterSearchBarContentWrapper>
      </AfterSearchBarWrapper>
      <AfterSearchBarDiscountWrapper>
        <AfterSearchBarDiscountStyle onClick={() => handleFilterCheck()}>
          <AfterDiscountBar />
        </AfterSearchBarDiscountStyle>
      </AfterSearchBarDiscountWrapper>
    </AfterSearchBarContainer>
  )
}
