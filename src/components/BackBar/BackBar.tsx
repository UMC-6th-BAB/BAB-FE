import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CategoryHeader,
  BackBtn,
  CategoryInfo,
} from '@components/BackBar/BackBar.style'

export default function BackBar() {
  const navigate = useNavigate()

  return (
    <CategoryHeader>
      <BackBtn onClick={() => navigate(-1)}>{`<`}</BackBtn>
      <CategoryInfo onClick={() => navigate(-1)}>포케</CategoryInfo>
    </CategoryHeader>
  )
}
