import {
  SchoolSearchPageContainer,
  Title,
  TitleText,
  BackArrow,
  PageContent,
  Step,
  StyledForm,
  StyledInput,
  Result,
  School,
  SchoolLogo,
  SchoolName,
  SchoolAddress,
  ControlBtn,
} from './SchoolSearchPage.style'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import logo from '@assets/dummy/suu_emblem1.jpg'
import Button from '@components/Button/Button'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SchoolSearchPage() {
  const [response, setResponse] = useState(false)
  const navigate = useNavigate()

  return (
    <SchoolSearchPageContainer>
      <Title>
        <BackArrow to="/studentPage">&lt;</BackArrow>
        <TitleText>학생 정보 입력</TitleText>
      </Title>
      <PageContent>
        {response ? (
          <>
            <Step>
              아래 학교로
              <br />
              고서현님의 학교를 등록할게요.
            </Step>
            <Result>
              <SchoolLogo src={logo} />
              <School>
                <SchoolName>숭실대학교</SchoolName>
                <SchoolAddress>서울시 동작구 상도로</SchoolAddress>
              </School>
            </Result>
            <ControlBtn>
              <Button
                state="normal"
                width="50%"
                colorType="gray"
                onClick={() => setResponse(false)}
              >
                다시 입력할게요.
              </Button>
              <Button
                state="normal"
                width="50%"
                colorType="yellow"
                onClick={() => navigate('/studentPage')}
              >
                좋아요!
              </Button>
            </ControlBtn>
          </>
        ) : (
          <>
            <Step>
              고서현님,
              <br />
              재학 중인 학교를 검색해주세요.
            </Step>
            <StyledForm>
              <StyledInput></StyledInput>
              <HiMagnifyingGlass onClick={() => setResponse(true)} />
            </StyledForm>
          </>
        )}
      </PageContent>
    </SchoolSearchPageContainer>
  )
}
