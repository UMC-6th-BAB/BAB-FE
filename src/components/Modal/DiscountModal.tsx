import React from 'react'
import useModalStore from '@stores/modalStore'
import cloudIcon from '@assets/modal/구름 아이콘.svg' // 이미지 경로에 맞게 변경완료
import {
  ModalBackground,
  ModalContainer,
  ModalTextWrapper,
  Button,
} from '@components/Modal/DiscountModal.style'
import { useNavigate } from 'react-router-dom'

export default function DiscountModal() {
  const { isModalOpen, closeModal } = useModalStore()
  const navigate = useNavigate()

  if (!isModalOpen) return null

  const handleDiscountPageClick = () => {
    navigate('/discount-event')
  }

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalTextWrapper>
          <p>사장님!</p>
          <p>오늘은 비가 오는 날이에요.</p>
          <p>천원 할인행사를 진행할까요?</p>
        </ModalTextWrapper>
        <img src={cloudIcon} alt="cloud" width="54" height="48" />
        <Button onClick={handleDiscountPageClick}>좋아요!</Button>
        {/* 좋아요 버튼 누르면 라우팅 해주면 됌*/}
        <Button gray="true" onClick={closeModal}>
          다음에 할게요
        </Button>
      </ModalContainer>
    </ModalBackground>
  )
}
