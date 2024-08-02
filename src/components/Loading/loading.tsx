import Spinner from '@assets/BusinessUploadPage/loading.svg'
import {
  StyledLoadingContainer,
  StyledSpinner,
  StyledText,
} from './Loading.style'

export default function Loading() {
  return (
    <StyledLoadingContainer>
      <StyledSpinner src={Spinner} />
      <StyledText>정보를 인식하고 있어요.</StyledText>
    </StyledLoadingContainer>
  )
}
