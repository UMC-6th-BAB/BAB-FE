import styled from 'styled-components'

export const DiscountList = styled.div`
  width: 294px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const DiscountItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Text = styled.div<{ color: string }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: ${(props) => props.color};
`

export const More = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 5px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;

  color: #000000;

  cursor: pointer;
`
