import styled from 'styled-components'

export const StatusBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 35px;
  padding: 10px 15px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const Time = styled.div`
  font-size: 0.75rem;
  color: black;
`

export const StatusIcons = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  margin-left: 8px;
  font-size: 1rem;
  color: black;
`