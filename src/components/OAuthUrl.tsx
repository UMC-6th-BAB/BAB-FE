

const REST_API_KEY = import.meta.env.REACT_APP_KAKAO_OAUTH_KEY
const REDIRECT_URI = 'http://localhost:5173/oauth'

export const Kakao_Auth_Url = `https://kauth.kakao.com/oauth/authorize?
response_type=code&
client_id=${REST_API_KEY}&
redirect_uri=${REDIRECT_URI}`