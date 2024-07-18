import styled from 'styled-components'

export const ManagerPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 100%;
  background-color: #f8f8f8;
  padding-top: 20px;
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
`

export const TitleText = styled.div`
  flex: 1;
  margin-left: 25px;
  text-align: center;
`

export const NotifyIcon = styled.img`
  width: 20px;
  height: 25px;
  cursor: pointer;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 90%;
  max-width: 400px;
  height: auto;
  margin: 10px 0;
  padding: 20px 10px;
  text-align: center;
  box-sizing: border-box;
`

export const CardImage = styled.img`
  width: 98px;
  height: auto;
`

export const CardTitle = styled.h2`
  text-align: left;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  min-width: 242px;
  min-height: 84px;
`

export const Button = styled.button`
  background: #ffc107;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  color: white;
  cursor: pointer;
`

export const AccountInfo = styled.div`
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  text-align: left;
  margin-top: 20px;
  box-sizing: border-box;
`

export const AccountDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  color: #333;
  margin: 10px 0;

  &.title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  &.subtitle {
    color: #888;
    margin-bottom: 10px;
  }

  &.divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 10px 0;
    width: 100%;
  }
`

export const AccountActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  span {
    color: #666;
    cursor: pointer;
  }
`
