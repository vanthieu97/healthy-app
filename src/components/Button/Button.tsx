import styled from '@emotion/styled'
import React, {MouseEventHandler, ReactNode} from 'react'

const StyledButton = styled.div({
  margin: '28px auto 64px',
  padding: '14px 4px',
  width: 'fit-content',
  minWidth: 296,
  background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
  fontSize: 18,
  lineHeight: '26px',
  textAlign: 'center',
  color: '#fff',
  cursor: 'pointer',
  transition: 'box-shadow 0.3s, transform 0.3s',
  '&:hover': {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  '@media (max-width: 768px)': {
    margin: '16px auto 32px',
    padding: 8,
    minWidth: 160,
  },
})

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>
  children: ReactNode
}

const Button = ({onClick, children}: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default React.memo(Button)
