import React from 'react'
import styled from 'styled-components'
import useModalStore from '@stores/modalStore'
import cloudIcon from '@assets/icons/구름 아이콘.png' // 이미지 경로에 맞게 변경완료

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0 0 10px;
  text-align: center;
  font-weight: bold;
  line-height: 0.5;

  &:last-child {
    margin-bottom: 0;
  }
`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 252px;
  height: 300px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
`

const Button = styled.button<{ gray?: boolean }>`
  width: 203px;
  height: 41px;
  background: ${({ gray }) => (gray ? '#EEEEEE' : '#ffc107')};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  color: ${({ gray }) => (gray ? '767676' : 'white')};
  cursor: pointer;
`

export default function RegisterModal() {
  const { isModalOpen, closeModal } = useModalStore()

  if (!isModalOpen) return null

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalText>
          <p>사장님!</p>
          <p>오늘은 비가 오는 날이에요.</p>
          <p>천원 할인행사를 진행할까요?</p>
        </ModalText>
        <img src={cloudIcon} alt="cloud" width="54" height="48" />
        <Button onClick={closeModal}>좋아요!</Button>
        {/* 좋아요 버튼 누르면 라우팅 해주면 됌*/}
        <Button gray onClick={closeModal}>
          다음에 할게요
        </Button>
      </ModalContainer>
    </ModalBackground>
  )
}
