import styled from 'styled-components'

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
`

export const Welcome = styled.div`
  font-size: 30px;
  font-weight: 1000;
  text-align: left;
  margin-top: 50px;
`

export const SelectMessage = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-top: 16px;
  margin-bottom: 230px;
  color: #767676;
`

export const MemberButton = styled.button`
  border-style: solid;
  border-radius: 20px;
  border-color: #d7d7d7;
  width: 342px;
  height: 53px;
  padding: 12px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  font-family: inherit;
  background-color: #ffffff;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover,
  &:focus,
  &:focus-visible {
    background-color: #ebebeb;
    border-color: #d7d7d7;
    outline: none;
  }
`

export const StartButton = styled.button`
  border-radius: 20px;
  border: none;
  width: 342px;
  height: 53px;
  padding: 12px;
  margin-top: 60px;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  color: #424242;
  background-color: #fdd100;
  cursor: pointer;
  transition: border-color 0.25s;
`
