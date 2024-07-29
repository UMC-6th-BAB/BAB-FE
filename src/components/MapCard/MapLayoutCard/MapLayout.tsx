import React from 'react'
import SearchBar from '@components/MapCard/SearchCard/SearchBar'
import AfterSearchBar from '@components/MapCard/SearchCard/AfterSearchBar'
import { searchStore } from '@stores/searchStore'
import { Outlet } from 'react-router-dom'

const BasicLayout: React.FC = () => {
  const { searchValue } = searchStore()

  return (
    <>
      {searchValue === '' ? <SearchBar /> : <AfterSearchBar />}
      <Outlet />
    </>
  )
}

export default BasicLayout
