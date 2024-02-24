import styled from '@emotion/styled'
import cup from 'assets/icons/icon_cup.svg'
import knife from 'assets/icons/icon_knife.svg'
import React from 'react'
import {MealType} from './utils'

const Wrapper = styled.div({
  padding: 24,
})
const NavList = styled.ul({
  display: 'flex',
  columnGap: 64,
  justifyContent: 'center',
  '@media (max-width: 768px)': {
    columnGap: 24,
  },
  '@media (max-width: 576px)': {
    columnGap: 16,
  },
})
const NavItem = styled.li<{active: boolean}>((props) => ({
  width: 136,
  height: 136,
  textAlign: 'center',
  cursor: 'pointer',
  position: 'relative',
  boxShadow: props.active ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'box-shadow 0.3s',
  fontSize: 20,
  lineHeight: '24px',
  fontWeight: 400,
  '.nav-bg': {
    transition: 'transform 0.3s',
    width: 'auto',
  },
  '&:hover': {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  '&:active .nav-bg': {
    transform: 'scale(0.95)',
  },
  '@media (max-width: 576px)': {
    width: 100,
    height: 100,
    fontSize: 16,
    padding: 4,
    boxSizing: 'border-box',
  },
  '@media (max-width: 480px)': {
    width: 80,
    height: 80,
    fontSize: 12,
  },
}))
const NavItemContent = styled.div({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Inter',
  textTransform: 'capitalize',
})
const Icon = styled.img({
  width: 56,
  height: 56,
  '@media (max-width: 576px)': {
    width: 30,
    height: 30,
  },
})

interface NavProps {
  src: string
  alt: string
  text: string
  active: boolean
  onClick: () => void
}

const Nav = ({src, alt, text, active, onClick}: NavProps) => {
  return (
    <NavItem active={active} onClick={onClick}>
      <img
        className='nav-bg'
        src='images/nav-background.png'
        alt='nav-background'
      />
      <NavItemContent>
        <Icon src={src} alt={alt} />
        <span>{text}</span>
      </NavItemContent>
    </NavItem>
  )
}

interface Props {
  activeType?: MealType
  onSelect: (type?: MealType) => void
}

const InputNavigation = ({activeType, onSelect}: Props) => {
  const onSelectNav = (type: MealType) => () => {
    onSelect(type)
  }
  return (
    <Wrapper>
      <NavList>
        <Nav
          active={activeType === 'morning'}
          src={knife}
          alt='icon-knife'
          text='morning'
          onClick={onSelectNav('morning')}
        />
        <Nav
          active={activeType === 'lunch'}
          src={knife}
          alt='icon-knife'
          text='lunch'
          onClick={onSelectNav('lunch')}
        />
        <Nav
          active={activeType === 'dinner'}
          src={knife}
          alt='icon-knife'
          text='dinner'
          onClick={onSelectNav('dinner')}
        />
        <Nav
          active={activeType === 'snack'}
          src={cup}
          alt='icon-cup'
          text='snack'
          onClick={onSelectNav('snack')}
        />
      </NavList>
    </Wrapper>
  )
}

export default React.memo(InputNavigation)
