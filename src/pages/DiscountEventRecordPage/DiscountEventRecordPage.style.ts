import styled from 'styled-components'

export const PageContainer = styled.div`
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

export const EventList = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const EventItem = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const EventTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
`

export const EventDescription = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 5px;
`

export const EventPeriod = styled.div`
  font-size: 0.8rem;
  color: gray;
  margin-top: 5px;
`
