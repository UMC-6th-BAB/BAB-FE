import { deleteStore } from '@apis/Store/deleteStore'
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
import storeInfoStore from '@stores/storeInfoStore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StoreInfoDeletePage() {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const storeInfos = storeInfoStore((state) => state.storeInfos)
  const removeStoreInfo = storeInfoStore((state) => state.removeStoreInfo)

  // 현재 등록된 가게 정보가 없을 경우에 대한 처리
  const storeId = storeInfos.length > 0 ? storeInfos[0].id : null

  useEffect(() => {
    console.log('Store Infos before deletion:', storeInfos)
  }, [])

  useEffect(() => {
    console.log('Updated Store Infos after deletion:', storeInfos)
  }, [storeInfos])

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }
  //실제 api 다룰때는 api함수 호출 -> 리턴받은 id 받고 removeStore에 인자로 보내주기 -> 가게 정보 업뎃
  //현재는 일단 removeStore를 통해 스토어에서 없어지는거 확인
  const handleDeleteClick = async () => {
    if (isChecked && storeId !== null) {
      try {
        //const deletedStoreId = await deleteStore(storeId) - api 다루는 부분
        //removeStoreInfo(deletedStoreId) - 반환받은 부분
        removeStoreInfo(storeId)
        const updatedStoreInfos = storeInfoStore.getState().storeInfos
        console.log(`Store with ID ${storeId} deleted successfully`)
        console.log('Updated Store Infos:', updatedStoreInfos)
        navigate('/manager')
      } catch (error) {
        console.error('Error deleting store:', error)
      }
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
