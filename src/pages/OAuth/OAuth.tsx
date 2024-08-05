import React from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import SyncLoader from "react-spinners/SyncLoader"
import {LoadContainer} from './OAuth.style'
import {LoginStore} from '@stores/loginStore'

export default function OAuth() {
    const navigate = useNavigate();
    const {setIsLogined} = LoginStore(state=>state);

    //인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    const options = {
        url: 'https://kauth.kakao.com/oauth/token',//임시 서버 주소, 백엔드 api 명세서 나오면 그때 수정
        method: 'POST',
        data:{
            "token": code //인가코드 서버로 넘기기
        }
    };
    
    axios(options)
        .then(response=>{
            if(response.data.isSuccess==true){
                console.log(response);
                localStorage.setItem("kakao_token", response.data.result.jwt);
                setIsLogined(true);
                navigate('/mapPage');
            } else if(response.data.isSuccess==false){
                alert(response.data.message);
                navigate('/signup')
            }
        })
        
    .catch(error => {
        console.error("Error during OAuth process:", error);
    })

    return (
        <LoadContainer>
            <SyncLoader/>
        </LoadContainer>
    );
};