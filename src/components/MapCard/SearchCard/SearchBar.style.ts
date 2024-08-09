import styled from 'styled-components'

export const AfterSearchBarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 40px;
  background-color: white;
  z-index: 1;
`

export const AfterSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: white;
`

export const AfterSearchBarIconWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  color: black;
  width: 10%;
  font-size: 40px;
  cursor: pointer;
`

export const AfterSearchBarContentWrapper = styled.div`
  display: flex;
  padding-left: 10px;
  font-size: 20px;
  color: black;
  width: 90%;
`

export const AfterSearchBarDiscountWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 20px;
  padding-left: 20px;
  background-color: none;
`

export const AfterSearchBarDiscountStyle = styled.div`
  width: 35%;
  cursor: pointer;
`

export const SearchBarContainer = styled.div`
  position: fixed;
  flex-direction: column;
  display: flex;
  width: 400px;
  background-color: none;
  align-items: center;
  z-index: 1;
`

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 90%;
  margin-top: 30px;
  box-shadow: 0 0 5px;
  border-radius: 20px;
  color: grey;
`

export const SearchBarInput = styled.input`
  width: 90%;
  padding: 3%;
  display: flex;
  background-color: white;
  color: black;
  font-weight: 500;
  font-size: 13px;
  border: none;
  border-radius: 0 20px 20px 0;
  &::placeholder {
    color: grey;
    text-align: left;
    font-weight: 500;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`

export const SearchBarIconWrapper = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: right;
  background-color: white;
  border-radius: 20px 0 0 20px;
  font-size: 18px;
  color: grey;
  cursor: pointer;
`

export const SearchBarDiscountWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  border-radius: 20px;
  justify-content: left;
  width: 90%;
`

export const SearchBarDiscountStyle = styled.div`
  width: 30%;
  cursor: pointer;
`
