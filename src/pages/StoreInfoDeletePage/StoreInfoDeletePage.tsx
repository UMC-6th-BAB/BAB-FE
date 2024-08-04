import {
  BackButton,
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  Content,
  Description,
  Header,
  DeleteButton,
  PageContainer,
  SubTitle,
  Title,
} from '@pages/StoreInfoDeletePage/StoreInfoDeletePage.style'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StoreInfoDeletePage() {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  const handleDeleteClick = () => {
    if (isChecked) {
      // 가게 삭제 로직 나중에 추가
      navigate('/manager')
    } else {
      return
    }
  }
  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate('/storeInfo-edit')}>
          &lt;
        </BackButton>
        <Title>가게 삭제</Title>
      </Header>
      <SubTitle>
        {/* 고서현 사장님 부분은 로그인 정보 받아와서 이름으로 랜더링 해주기 */}
        고서현 사장님! <br />
        가게를 정말 삭제할까요?
      </SubTitle>
      <Content>
        <Description>
          가게를 삭제하면 할인 기록과 정보가 모두 삭제돼요.
          <br />
          가게를 다시 등록해도 이전 기록은 복구되지 않아요.
        </Description>
        <CheckboxWrapper>
          <Checkbox
            type="checkbox"
            id="confirm"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <CheckboxLabel htmlFor="confirm">
            유의사항을 확인했어요.
          </CheckboxLabel>
        </CheckboxWrapper>
      </Content>
      <DeleteButton onClick={handleDeleteClick}>가게 삭제</DeleteButton>
    </PageContainer>
  )
}
