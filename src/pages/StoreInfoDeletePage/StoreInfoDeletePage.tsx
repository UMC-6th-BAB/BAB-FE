import { deleteStore } from '@apis/Store/deleteStore'
import {
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  Content,
  Description,
  DeleteButton,
  PageContainer,
  SubTitle,
} from '@pages/StoreInfoDeletePage/StoreInfoDeletePage.style'
import storeInfoStore from '@stores/storeInfoStore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import { LoginStore } from '@stores/loginStore'
import managerRegisterInfoStore from '@stores/managerRegisterInfoStore'

export default function StoreInfoDeletePage() {
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const storeInfos = storeInfoStore((state) => state.storeInfos)
  const removeStoreInfo = storeInfoStore((state) => state.removeStoreInfo)
  const user = LoginStore((state) => state.user)
  const { setIsRegistered } = managerRegisterInfoStore()

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
  const handleDeleteClick = async () => {
    if (isChecked && storeId !== null) {
      try {
        const deletedStoreId = await deleteStore(storeId)
        removeStoreInfo(deletedStoreId)
        const updatedStoreInfos = storeInfoStore.getState().storeInfos
        console.log(`Store with ID ${storeId} deleted successfully`)
        console.log('Updated Store Infos:', updatedStoreInfos)
        setIsRegistered(false)
        navigate('/manager')
      } catch (error) {
        console.error('Error deleting store:', error)
      }
    }
  }
  return (
    <PageContainer>
      <HeaderTitle
        title="가게 삭제"
        $icon="back"
        onClick={() => navigate('/storeInfo-edit')}
      />
      <SubTitle>
        {user} 사장님! <br />
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
