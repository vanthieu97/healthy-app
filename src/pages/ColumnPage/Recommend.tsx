import styled from '@emotion/styled'
import React from 'react'
import {ColumnType} from './utils'

const Wrapper = styled.div({
  marginTop: 56,
  '@media (max-width: 1024px)': {
    marginTop: 40,
  },
})
const List = styled.ul({
  display: 'flex',
  gap: 32,
  '@media (max-width: 1024px)': {
    gap: 16,
  },
  '@media (max-width: 768px)': {
    flexWrap: 'wrap',
  },
  '@media (max-width: 480px)': {
    gap: 6,
  },
})
const Item = styled.li<{active: boolean}>((props) => ({
  flex: 1,
  backgroundColor: '#2E2E2E',
  padding: '24px 8px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  rowGap: 18,
  cursor: 'pointer',
  transition: 'box-shadow 0.3s, transform 0.3s',
  '&:hover': {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)',
  },
  boxShadow: props.active ? '0px 4px 8px rgba(0, 0, 0, 0.8)' : 'none',
  '&:active': {
    transform: 'scale(0.95)',
  },
  span: {
    fontWeight: props.active ? 600 : 400,
  },
  '@media (max-width: 1024px)': {
    padding: 8,
  },
  '@media (max-width: 768px)': {
    flex: 'calc(50% - 8px)',
    boxSizing: 'border-box',
    padding: '24px 8px',
  },
  '@media (max-width: 576px)': {
    padding: '16px 8px',
  },
  '@media (max-width: 480px)': {
    padding: '12px 8px',
  },
}))

const Title = styled.span({
  textTransform: 'uppercase',
  font: '400 22px/27px "Inter"',
  color: '#FFCC21',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: -9,
    transform: 'translate(-50%, 50%)',
    width: 56,
    borderTop: 'solid 1px #fff',
  },
  '@media (max-width: 1024px)': {
    fontSize: 18,
    lineHeight: '22px',
  },
})
const Description = styled.span({
  fontSize: 18,
  lineHeight: '26px',
  color: '#fff',
  '@media (max-width: 1024px)': {
    fontSize: 16,
    lineHeight: '22px',
  },
})

interface Props {
  type?: string
  onSelect: (type: ColumnType) => void
}

const Recommend = ({type, onSelect}: Props) => {
  const onSelectType = (type: ColumnType) => () => {
    onSelect(type)
  }

  return (
    <Wrapper>
      <List>
        <Item active={type === 'column'} onClick={onSelectType('column')}>
          <Title>recommended column</Title>
          <Description>オススメ</Description>
        </Item>
        <Item active={type === 'diet'} onClick={onSelectType('diet')}>
          <Title>recommended diet</Title>
          <Description>ダイエット</Description>
        </Item>
        <Item active={type === 'beauty'} onClick={onSelectType('beauty')}>
          <Title>recommended beauty</Title>
          <Description>美容</Description>
        </Item>
        <Item active={type === 'health'} onClick={onSelectType('health')}>
          <Title>recommended health</Title>
          <Description>健康</Description>
        </Item>
      </List>
    </Wrapper>
  )
}

export default React.memo(Recommend)
