interface RegistrationPromptProps {
  isRegistered: boolean
}

export default function RegistrationPrompt({
  isRegistered,
}: RegistrationPromptProps) {
  return (
    <>
      <span>고서현 사장님!</span>
      <br />
      {isRegistered ? (
        <>
          <span>심사가 완료되었습니다</span>
          <br />
          <span>가게 정보를 등록해주세요.</span>
        </>
      ) : (
        <>
          <span>사업자 등록증을 등록해주세요.</span>
        </>
      )}
    </>
  )
}
