import styled from 'styled-components'

export const StyledAccount = styled.div`
  display: flex;
  justify-content: space-between;

  width: 294px;
`
export const StyledAccountControl = styled.div`
  display: flex;
  justify-content: space-between;

  width: 230px;
  padding-left: 26px;
`
export const Text = styled.div<{ color?: string }>`
  font-weight: 500;
  font-size: 14px;

  color: ${(props) => (props.color ? props.color : '#676767')};
`
export const AccountControlBtn = styled.div`
  font-weight: 500;
  font-size: 14px;

  color: #676767;

  cursor: pointer;
`
