import styled from 'styled-components'

export const StyledCard = styled.div<{
  paddingTop: string
  paddingBottom: string
}>`
  box-sizing: border-box;
  width: 342px;
  left: 24px;

  display: flex;
  flex-direction: column;
  align-items: start;

  padding-left: 24px;
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};

  background: #ffffff;
  box-shadow: 4px 4px 10px 4px rgba(67, 89, 105, 0.05);
  border-radius: 20px;
`
export const CardTitle = styled.div<{ paddingBottom?: string }>`
  padding-bottom: ${(props) => props.paddingBottom};

  font-weight: 700;
  font-size: 20px;
  color: #000000;
`
