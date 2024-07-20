

const REST_API_KEY = 'c57491a61eb5e7938e2c6124d78227ba'
const REDIRECT_URI = 'http://localhost:5173/oauth'

export const Kakao_Auth_Url = `https://kauth.kakao.com/oauth/authorize?
response_type=code&
client_id=${REST_API_KEY}&
redirect_uri=${REDIRECT_URI}`