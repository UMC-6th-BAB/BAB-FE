import { useNavigate } from 'react-router-dom'
import Back from '@assets/RegisterStoreInfo/back.svg'
import nav from '@assets/RegisterStoreInfo/thirdstep.svg'
import errorIcon from '@assets/RegisterStoreInfo/warnning.svg'

import {
  StyledBackIcon,
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledLabel,
  StyledMenuAddButton,
  StyledMenuTable,
  StyledNavImg,
  StyledNavImgWrapper,
  StyledNavText,
  StyledRow,
  StyledScrollableContent,
  StyledTitle,
  StyledUploadText,
  StyledErrorMessage,
  StyledInputContainer,
  StyledMenuLabel,
} from './ThirdRegisterStoreInfo.style'
import { useState } from 'react'
import { RegisterMenu } from '@components/RegisterMenu/RegisterMenu'

interface Menu {
  name: string
  price: string
}

export default function ThirdRegisterStoreInfo() {
  const [isError, setIsError] = useState<boolean>(false)

  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }

  const [menus, setMenus] = useState<Menu[]>([
    { name: '', price: '' },
    { name: '', price: '' },
  ])

  const handleAddMenu = () => {
    setMenus([...menus, { name: '', price: '' }])
  }

  const handleMenuChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { name, value } = e.target
    const updatedMenus = menus.map((menu, i) =>
      i === index ? { ...menu, [name]: value } : menu,
    )
    setMenus(updatedMenus)
  }

  const handleNext = () => {
    // const isNextButtonDisabled = !menus.every((menu) => menu.name && menu.price)
    const isFormValid = menus.every((menu) => menu.name && menu.price)
    if (isFormValid) {
      setIsError(false)
      console.log('폼 유효함')
      // navigate('/nextpage')
    } else {
      setIsError(true)
      console.log('모든 필드를 채워주세요.')
    }
  }

  return (
    <StyledContainer>
      <StyledRow>
        <StyledBackIcon onClick={handleBack} src={Back} />
        <StyledTitle>가게 정보 등록</StyledTitle>
      </StyledRow>
      <StyledNavImgWrapper>
        <StyledNavImg src={nav} />
        <StyledNavText>
          <div>기본 정보</div>
          <div>영업 시간</div>
          <div>메뉴 등록</div>
        </StyledNavText>
      </StyledNavImgWrapper>
      <StyledScrollableContent>
        <StyledFormContainer>
          <StyledInputContainer>
            <StyledLabel>메뉴 정보</StyledLabel>
            {isError && (
              <StyledErrorMessage>
                <img src={errorIcon} alt="Error icon" />
                모든 필드를 채워주세요.
              </StyledErrorMessage>
            )}
          </StyledInputContainer>
          <StyledMenuTable className={isError ? 'invalid' : ''}>
            <StyledUploadText>
              * 가격은 1인분 기준으로 입력해주세요.
            </StyledUploadText>
            {menus.map((menu, index) => (
              <div key={index}>
                <StyledMenuLabel>메뉴 {index + 1}</StyledMenuLabel>
                <RegisterMenu
                  index={index}
                  menu={menu}
                  onChange={handleMenuChange}
                />
              </div>
            ))}
            <StyledMenuAddButton onClick={handleAddMenu}>
              메뉴 추가하기
            </StyledMenuAddButton>
          </StyledMenuTable>
          <StyledButton onClick={handleNext}>완료</StyledButton>
        </StyledFormContainer>
      </StyledScrollableContent>
    </StyledContainer>
  )
}
