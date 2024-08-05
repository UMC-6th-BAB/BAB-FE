import { FooterContainer } from './Footer.style'
import { FooterIcon } from './Footer.style'
import { FooterLink } from './Footer.style'
import { FooterText } from './Footer.style'
import homeIcon from '@icons/아이콘_홈.svg'
import listIcon from '@icons/아이콘_할인가게.svg'
import myPageIcon from '@icons/아이콘_마이페이지.svg'

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLink to="/" className="active">
        <FooterIcon src={homeIcon} alt="홈화면" />
        <FooterText>홈화면</FooterText>
      </FooterLink>
      <FooterLink to="/list">
        <FooterIcon src={listIcon} alt="할인 가게 목록" />
        <FooterText>할인 가게 목록</FooterText>
      </FooterLink>
      <FooterLink to="/manager">
        <FooterIcon src={myPageIcon} alt="마이페이지" />
        <FooterText>마이페이지</FooterText>
      </FooterLink>
    </FooterContainer>
  )
}