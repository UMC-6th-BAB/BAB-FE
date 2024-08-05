import React from 'react';
import {useNavigate} from 'react-router-dom'
import {LoginStore} from '@stores/loginStore'
import { MemberContainer, Welcome, SelectMessage, MemberButton, StartButton } from './MemberType.style';

export default function MemberType() {
    const navigate = useNavigate();

    const {user, membertype, isLogined, setMembertype} = LoginStore(state=>state);

    const handleInputStudent=()=>{
        setMembertype('student');
        console.log('student local storage');
        console.log('현재 로그인 상태1', {user, membertype, isLogined})
    }
    const handleInputManager=()=>{
        setMembertype('manager');
        console.log('manager local storage')
    }

    return(
        <MemberContainer>
            <Welcome>{user} 님, <br/>환영합니다!</Welcome>
            <SelectMessage>서비스 이용을 위해<br/>회원 유형을 선택해주세요.</SelectMessage>
            <MemberButton onClick={handleInputStudent}>학생이에요</MemberButton>
            <MemberButton onClick={handleInputManager}>사장님이에요</MemberButton>
            <StartButton onClick={()=>navigate("/signup")}>밥이득 시작하기</StartButton>
        </MemberContainer>
    )
}