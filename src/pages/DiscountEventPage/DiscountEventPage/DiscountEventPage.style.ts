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
  align-items: start;
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
  font-weight: 400;
`

export const DateDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 10px;
  width: 100%;
  height: auto;
`

//리액트 캘린더 픽커 이용..커스터마이징
export const CustomDatePickerWrapper = styled.div`
  .react-datepicker {
    font-size: 14px; /* 글꼴 크기 조정 */
  }
  .react-datepicker__month-container {
    width: auto; /* 달력 컨테이너 너비 조정 */
  }
  .react-datepicker__header {
    background-color: #ffc107; /* 헤더 배경색 조정 */
  }
  .react-datepicker__day-name {
    width: 1.1rem; /* 날짜와 요일의 너비 조정 */
    line-height: 2rem; /* 날짜와 요일의 높이 조정 */
    color: white;
    font-weight: 400;
  }
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 1.1rem;
    line-height: 2rem;
  }
`

export const DateInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .react-datepicker-wrapper {
    width: 125px;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    font-weight: 600;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
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
  min-width: 55px;
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
    border: 1px solid #e7e7e7;
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
  max-width: 342px; /* 최대 너비 설정 */
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
export const ErrorMessage = styled.div`
  color: red;
  margin-top: 4px;
  font-size: 0.8rem;
`
