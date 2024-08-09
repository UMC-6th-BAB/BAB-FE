import styled from 'styled-components'

export const StudentPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f8f8f8;
  padding-top: 70px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  color: #666;
  margin-top: 20px;
  margin-bottom: 20px;

  color: #767676;
`

export const TitleText = styled.div`
  flex: 1;
  margin-left: 25px;
  text-align: center;
  font-weight: bold;
`

export const NotifyIcon = styled.img`
  width: 20px;
  height: 25px;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`
