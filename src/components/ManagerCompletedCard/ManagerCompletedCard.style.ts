import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  width: 90%;
  max-width: 342px;
  min-height: 230px;
  padding: 20px;
  box-sizing: border-box;
  margin: 20px 0;
`

export const CardTitle = styled.h2`
  font-size: 1rem;
  color: #676767;
  text-align: left;
  font-weight: bold;
  margin: 0;
`

export const CardSubtitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  text-align: left;
  font-weight: bold;
  margin: 0 0 10px 0;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`

export const CardButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 130px;
  min-height: 70px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  color: #000;
  font-weight: bold;
  white-space: normal; /* 줄바꿈 허용 */
`

export const EditButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;
  height: 20px;
  background: none;
  border: none;
  font-size: 1rem;
  color: #000;
  cursor: pointer;
  font-weight: semibold;
`

export const ArrowIcon = styled.span`
  margin-left: auto;
  margin-right: 10px;
  font-size: 1.2rem;
  color: #666;
`
