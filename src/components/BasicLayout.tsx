import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import AfterSearchBar from './AfterSearchBar'
import { SearchStore } from '../stores/searchStore'
import { Outlet } from 'react-router-dom'

const BasicLayout: React.FC = () => {
  const { searchValue } = SearchStore()

  return (
    <>
      <Header />
      {searchValue === '' ? <SearchBar /> : <AfterSearchBar />}
      <Outlet />
    </>
  )
}

export default BasicLayout
