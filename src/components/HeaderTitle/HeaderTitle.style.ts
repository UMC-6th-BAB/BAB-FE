import styled, { css } from 'styled-components'

interface HeaderTitleStyleProps {
  icon?: 'back' | 'notification'
}

export const Container = styled.div<HeaderTitleStyleProps>`
  width: 100%;
  max-width: 400px;
  height: 58px;

  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: #f8f8f8;
`
export const Title = styled.div<HeaderTitleStyleProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  flex: 1;

  text-align: center;
  ${({ icon }) =>
    icon === 'back' &&
    css`
      color: #111111;
      margin-left: -10.5px;
    `}

  ${({ icon }) =>
    icon === 'notification' &&
    css`
      color: #767676;
      margin-right: -25px;
    `}
`

export const Icon = styled.button`
  cursor: pointer;
  border: none;
`
