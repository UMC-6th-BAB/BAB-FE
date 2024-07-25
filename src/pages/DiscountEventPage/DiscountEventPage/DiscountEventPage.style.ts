import React from 'react'
import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

export const DateDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  flex-grow: 1;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  left: 10px;
`

export const EventForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 20px;
  box-sizing: border-box;
`

export const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 5px;
`
export const SpanLabel = styled.span`
  font-size: 0.8rem;
  text-align: center;
  margin-left: 2px;
`

export const DateInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
`

export const DateInput = styled.input`
  width: 120px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 600;
  line-height: 1;
`

export const MenuTable = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
`
export const MenuTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 10px;
`

export const MenuTableBody = styled.div`
  width: 100%;
  border-top: 1px solid #ddd;
  box-sizing: border-box;
`

export const MenuRow = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const MenuLabel = styled.span`
  font-size: 1rem;
  font-weight: 400;
`

export const PriceInput = styled.input`
  width: 102px;
  height: 26px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-weight: 400;
`
export const Checkbox = styled.input`
  margin-left: 10px;
  accent-color: #ffc107;
`

export const CheckboxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;

  input[type='checkbox'] {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input[type='checkbox'] + label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    background-color: #fdd100;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type='checkbox']:checked + label {
    background-color: #fdd100;
    color: white;
  }

  input[type='checkbox']:checked + label:after {
    content: '';
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -60%) rotate(45deg);
  }
`

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 30px; /* 하단에서 간격 */
  width: calc(100% - 40px); /* 전체 폭에서 좌우 패딩을 제외 */
  max-width: 360px; /* 최대 너비 설정 */
  padding: 15px;
  background-color: #ffc107;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  box-sizing: border-box;
`
