import styled from '@emotion/styled'
import iconChallenge from 'assets/icons/icon_challenge.svg'
import closeIcon from 'assets/icons/icon_close.svg'
import iconInfo from 'assets/icons/icon_info.svg'
import iconMemo from 'assets/icons/icon_memo.svg'
import iconMenu from 'assets/icons/icon_menu.svg'
import iconCount from 'assets/icons/info_count.svg'
import {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'

interface HeaderMenuProps {
  showMenu: boolean
}

const Wrapper = styled.header({
  height: 64,
  width: '100%',
  backgroundColor: '#414141',
  padding: '12px 0',
  boxSizing: 'border-box',
  position: 'sticky',
  top: 0,
  zIndex: 99,
  '@media (max-width: 576px)': {
    height: '100%',
    padding: '8px 0',
  },
})
const Content = styled.div({
  width: '100%',
  maxWidth: 960,
  padding: '0 16px',
  margin: 'auto',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  '@media (max-width: 576px)': {
    flexDirection: 'column',
    padding: '0 8px',
  },
})
const Logo = styled.img({
  width: 'auto',
  height: 40,
  '@media (max-width: 576px)': {
    height: 32,
  },
})
const Nav = styled.nav({
  display: 'flex',
  columnGap: 16,
  '@media (max-width: 576px)': {
    width: '100%',
  },
})
const Menu = styled.ul({
  display: 'flex',
  color: '#fff',
  '@media (max-width: 1024px)': {
    gap: 12,
  },
  '@media (max-width: 576px)': {
    justifyContent: 'space-evenly',
    width: '100%',
  },
})
const MenuItem = styled.li({
  display: 'flex',
  columnGap: 8,
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  height: '100%',
  '&:not(:last-child)': {
    width: 160,
  },
  '@media (max-width: 1024px)': {
    '&:not(:last-child)': {
      width: 'fit-content',
    },
    fontSize: 13,
  },
  fontWeight: 300,
  a: {
    display: 'flex',
    columnGap: 8,
    alignItems: 'center',
  },
})
const IconWrap = styled.div({
  position: 'relative',
})
const Icon = styled.img({
  width: 32,
  height: 32,
  '@media (max-width: 576px)': {
    width: 24,
    height: 24,
  },
})
const IconCount = styled.img({
  width: 16,
  height: 16,
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'translateX(50%)',
})
const HeaderMenuWrapper = styled.div<HeaderMenuProps>((props) => ({
  position: 'absolute',
  top: '100%',
  right: 0,
  width: 280,
  zIndex: 999,
  height: props.showMenu ? 'auto' : 0,
  padding: '14px 0',
  '@media (max-width: 576px)': {
    width: 200,
    padding: '8px 0',
  },
}))
const HeaderMenu = styled.ul<HeaderMenuProps>((props) => ({
  backgroundColor: '#777777',
  transformOrigin: 'top',
  transform: `scaleY(${props.showMenu ? 1 : 0})`,
  transition: 'transform 0.3s',
}))
const HeaderMenuItem = styled.li({
  padding: '22px 32px',
  color: '#fff',
  fontSize: 18,
  lineHeight: '26px',
  position: 'relative',
  transition: 'background 0.2s',
  '&:hover': {
    backgroundColor: '#414141',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: 'solid 1px #fff',
    mixBlendMode: 'normal',
    opacity: 0.15,
  },
  '@media (max-width: 768px)': {
    padding: '16px 24px',
    fontSize: 16,
    lineHeight: '24px',
  },
  '@media (max-width: 576px)': {
    padding: '12px 16px',
    fontSize: 14,
    lineHeight: '20px',
  },
})
const CloseIcon = styled.img<HeaderMenuProps>((props) => ({
  position: 'absolute',
  width: 32,
  height: 32,
  bottom: '100%',
  right: 0,
  backgroundColor: '#414141',
  display: props.showMenu ? 'block' : 'none',
  '&:hover': {
    backgroundColor: '#2E2E2E',
  },
  '@media (max-width: 576px)': {
    width: 24,
    height: 24,
  },
}))

const Header = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [showMenu, setShowMenu] = useState(false)

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  const onClickShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Wrapper>
      <Content>
        <Link to=''>
          <Logo src='images/logo.png' alt='logo' />
        </Link>
        <Nav>
          <Menu>
            <MenuItem>
              <Link to='my-record'>
                <Icon src={iconMemo} alt='icon-memo' />
                <span>自分の記録</span>
              </Link>
            </MenuItem>
            <MenuItem>
              <Icon src={iconChallenge} alt='icon-challenge' />
              <span>チャレンジ</span>
            </MenuItem>
            <MenuItem>
              <IconWrap>
                <Icon src={iconInfo} alt='icon-info' />
                <IconCount src={iconCount} alt='icon-count' />
              </IconWrap>
              <span>お知らせ</span>
            </MenuItem>
            <MenuItem>
              <Icon src={iconMenu} alt='icon-menu' onClick={onClickShowMenu} />
              <HeaderMenuWrapper ref={menuRef} showMenu={showMenu}>
                <HeaderMenu showMenu={showMenu}>
                  <HeaderMenuItem>自分の記録</HeaderMenuItem>
                  <HeaderMenuItem>体重グラフ</HeaderMenuItem>
                  <HeaderMenuItem>目標</HeaderMenuItem>
                  <HeaderMenuItem>選択中のコース</HeaderMenuItem>
                  <HeaderMenuItem>
                    <Link to='column'>コラム一覧</Link>
                  </HeaderMenuItem>
                  <HeaderMenuItem>設定</HeaderMenuItem>
                </HeaderMenu>
                <CloseIcon
                  src={closeIcon}
                  alt='close-icon'
                  onClick={onClickShowMenu}
                  showMenu={showMenu}
                />
              </HeaderMenuWrapper>
            </MenuItem>
          </Menu>
        </Nav>
      </Content>
    </Wrapper>
  )
}

export default Header
