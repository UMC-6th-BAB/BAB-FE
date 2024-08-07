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

import { studentInfoStore } from '@stores/studentInfoStore'
import { schoolInfoStore } from '@stores/schoolInfoStore'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SchoolSearchPage() {
  const [response, setResponse] = useState<boolean>(false)
  const [searchVal, setSearchVal] = useState<string>('')
  const { studentName, setIsSchoolSet } = studentInfoStore((state) => state)
  const { setSchoolName, setAddress } = schoolInfoStore((state) => state)

  const dummy = {
    schoolName: '숭실대학교',
    address: '서울특별시 동작구 상도로 369',
  }

  const navigate = useNavigate()
  const handleSearch = () => {
    setResponse(true) // 학교 검색 api 개발 완료되면 수정 예정
  }
  const backToSearch = () => {
    setResponse(false)
    setSearchVal('')
  }
  const handleSetSchool = () => {
    setIsSchoolSet(true)
    setSchoolName(dummy.schoolName)
    setAddress(dummy.address)
    navigate('/studentPage')
  }

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
              {studentName}님의 학교를 등록할게요.
            </Step>
            <Result>
              <SchoolLogo src={logo} />
              <School>
                <SchoolName>{dummy.schoolName}</SchoolName>
                <SchoolAddress>{dummy.address}</SchoolAddress>
              </School>
            </Result>
            <ControlBtn>
              <Button onClick={backToSearch} width="half" colorType="gray">
                다시 입력할게요.
              </Button>
              <Button onClick={handleSetSchool} width="half" colorType="yellow">
                좋아요!
              </Button>
            </ControlBtn>
          </>
        ) : (
          <>
            <Step>
              {studentName}님,
              <br />
              재학 중인 학교를 검색해주세요.
            </Step>
            <StyledForm>
              <StyledInput
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
              ></StyledInput>
              <HiMagnifyingGlass onClick={handleSearch} />
            </StyledForm>
          </>
        )}
      </PageContent>
    </SchoolSearchPageContainer>
  )
}
