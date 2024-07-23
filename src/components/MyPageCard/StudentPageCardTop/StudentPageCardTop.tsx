import { StyledCard } from '../MyPageCard.style'
import { CardTitle } from '../MyPageCard.style'
import {
  FindSchoolContainer,
  FindSchoolBtn,
  StyledArrow,
  EditSchool,
} from './StudentPageCardTop.style'

import StudentIDCardImg from '../../../assets/StudentPage/studentIDCard.png'
import ArrowImg from '../../../assets/StudentPage/arrow.svg'
import PinImg from '../../../assets/StudentPage/pin.png'

interface Props {
  isSchoolSet: boolean
}

export default function StudentPageCardTop({ isSchoolSet }: Props) {
  return (
    <StyledCard paddingTop="35px" paddingBottom={isSchoolSet ? '16px' : '26px'}>
      <CardTitle>고서현님!</CardTitle>
      {isSchoolSet ? (
        <>
          <CardTitle>OO 대학교 근처 식당으로</CardTitle>
          <CardTitle paddingBottom="21px">할인 정보를 알려드릴게요!</CardTitle>
          <FindSchoolContainer>
            <img
              src={PinImg}
              width="64px"
              height="69px"
              style={{ marginBottom: '18px' }}
            />
          </FindSchoolContainer>
          <EditSchool>대학 수정하기</EditSchool>
        </>
      ) : (
        <>
          <CardTitle paddingBottom="22px">
            학생이라면 정보를 알려주세요.
          </CardTitle>
          <FindSchoolContainer>
            <img
              src={StudentIDCardImg}
              width="115px"
              height="73px"
              style={{ marginBottom: '18px' }}
            />
            <FindSchoolBtn>
              학교찾기
              <StyledArrow src={ArrowImg} />
            </FindSchoolBtn>
          </FindSchoolContainer>
        </>
      )}
    </StyledCard>
  )
}
