import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 60px;
  background-color: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 100;
`

export const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #888;

  &.active {
    color: #000;
  }
`

export const FooterIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const FooterText = styled.div`
  font-size: 0.75rem;
`
