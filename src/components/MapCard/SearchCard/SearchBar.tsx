import { useState } from 'react'
import {
  SearchBarContainer,
  SearchBarDiscountWrapper,
  SearchBarIconWrapper,
  SearchBarInput,
  SearchBarWrapper,
  SearchBarDiscountStyle,
} from '@components/MapCard/SearchCard/SearchBar.style'
import DiscountBar from '@components/MapCard/DiscountCard/DiscountBar'
import { IoIosSearch } from 'react-icons/io'

type Props = {
  handleFilterCheck: () => void
  handleSearchValue: (value: string) => void
}

export default function SearchBar({
  handleFilterCheck,
  handleSearchValue,
}: Props) {
  const [data, setData] = useState<string>('')

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchBarIconWrapper
          onClick={() => {
            handleSearchValue(data)
          }}
        >
          <IoIosSearch />
        </SearchBarIconWrapper>
        <SearchBarInput
          type="text"
          placeholder="먹고 싶은 메뉴를 검색해보세요"
          value={data}
          onChange={(e) => handleValue(e)}
        />
      </SearchBarWrapper>
      <SearchBarDiscountWrapper>
        <SearchBarDiscountStyle onClick={() => handleFilterCheck()}>
          <DiscountBar />
        </SearchBarDiscountStyle>
      </SearchBarDiscountWrapper>
    </SearchBarContainer>
  )
}
