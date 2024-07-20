import React from 'react';
import {useNavigate} from 'react-router-dom'
import { MemberContainer, Welcome, SelectMessage, MemberButton, StartButton } from './MemberType.style';

export const MemberType: React.FC = () => {
    const navigate = useNavigate();

    return(
        <MemberContainer>
            <Welcome>이시현님, <br/>환영합니다!</Welcome>
            <SelectMessage>서비스 이용을 위해<br/>회원 유형을 선택해주세요.</SelectMessage>
            <MemberButton>학생이에요</MemberButton>
            <MemberButton>사장님이에요</MemberButton>
            <StartButton onClick={()=>navigate("/signup")}>밥이득 시작하기</StartButton>
        </MemberContainer>
    )
}