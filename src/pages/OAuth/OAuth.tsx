import React from 'react';
import axios from 'axios';
import SyncLoader from "react-spinners/SyncLoader"
import {LoadContainer} from './OAuth.style'

export const OAuth: React.FC = () => {
    //인가코드
    let code = new URL(window.location.href).searchParams.get("code");

    const options = {
        url: 'https://kauth.kakao.com/oauth/token',//임시 서버 주소, 백엔드 api 명세서 나오면 그때 수정
        method: 'POST',
        data:{
            code: code //인가코드 서버로 넘기기
        }
    };
    
    axios(options)
        .then(response=>console.log(response))
    .catch(error => {
        console.error("Error during OAuth process:", error);
    })

    return (
        <LoadContainer>
            <SyncLoader/>
        </LoadContainer>
    );
};