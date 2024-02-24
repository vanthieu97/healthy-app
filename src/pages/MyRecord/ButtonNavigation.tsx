import styled from '@emotion/styled'
import React from 'react'

interface ItemContentProps {
  index: number
}

const ButtonListing = styled.div({
  padding: '56px 0',
  display: 'flex',
  columnGap: 48,
  '@media (max-width: 1024px)': {
    padding: '16px 0',
    columnGap: 16,
  },
  '@media (max-width: 576px)': {
    padding: '4px 0',
    columnGap: 4,
  },
})
const ButtonItem = styled.a({
  flex: 1,
  backgroundColor: '#FFCC21',
  padding: 24,
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background 0.3s',
  '&:hover': {
    backgroundColor: '#FF963C',
  },
  '@media (max-width: 1024px)': {
    padding: 16,
  },
  '@media (max-width: 576px)': {
    padding: 4,
  },
})
const ItemContent = styled.div<ItemContentProps>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 10,
  aspectRatio: '1/1',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  backgroundColor: '#000',
  padding: 16,
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    mixBlendMode: 'luminosity',
  },
  '&:after': {
    content: '""',
    background: `url(./images/MyRecommend-${props.index}.jpg) ${
      props.index === 3 ? 'center' : 'left'
    } center no-repeat`,
    position: 'absolute',
    width: '100%',
    height: '100%',
    mixBlendMode: 'luminosity',
    opacity: 0.35,
    backgroundSize: 'cover',
  },
  '@media (max-width: 576px)': {
    padding: 8,
  },
}))
const Title = styled.span({
  textTransform: 'uppercase',
  color: '#FFCC21',
  font: '400 25px/30px "Inter"',
  zIndex: 3,
  '@media (max-width: 768px)': {
    fontSize: 18,
    lineHeight: '26px',
  },
  '@media (max-width: 576px)': {
    fontSize: 12,
    lineHeight: '16px',
  },
})
const Description = styled.span({
  backgroundColor: '#FF963C',
  color: '#fff',
  fontSize: 14,
  lineHeight: '20px',
  zIndex: 3,
  padding: '0 16px',
  '@media (max-width: 768px)': {
    fontSize: 12,
    lineHeight: '16px',
  },
  '@media (max-width: 576px)': {
    fontSize: 10,
    lineHeight: '14px',
    padding: '0 8px',
  },
})

const onClickScroll = (id: string) => () => {
  window.location.hash = id
}

const ButtonNavigation = () => (
  <ButtonListing>
    <ButtonItem onClick={onClickScroll('myRecord')}>
      <ItemContent index={1}>
        <Title>body record</Title>
        <Description>自分のカラダの記録</Description>
      </ItemContent>
    </ButtonItem>
    <ButtonItem onClick={onClickScroll('myExercise')}>
      <ItemContent index={2}>
        <Title>my exercise</Title>
        <Description>自分の運動の記録</Description>
      </ItemContent>
    </ButtonItem>
    <ButtonItem onClick={onClickScroll('myDiary')}>
      <ItemContent index={3}>
        <Title>my diary</Title>
        <Description>自分の日記</Description>
      </ItemContent>
    </ButtonItem>
  </ButtonListing>
)

export default React.memo(ButtonNavigation)
