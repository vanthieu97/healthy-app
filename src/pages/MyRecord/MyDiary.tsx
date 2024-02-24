import styled from '@emotion/styled'
import Button from 'components/Button'
import React, {useCallback, useEffect, useState} from 'react'

const Wrapper = styled.div({
  marginTop: 56,
  marginBottom: 64,
})
const Title = styled.div({
  font: '400 22px/27px "Inter"',
  textTransform: 'uppercase',
})
const DiaryWrap = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 12,
  rowGap: 12,
  '@media (max-width: 576px)': {
    columnGap: 8,
    rowGap: 8,
  },
})
const DiaryItem = styled.li({
  width: 'calc(25% - 9px)',
  padding: '16px 16px 28px',
  border: 'solid 1px #707070',
  aspectRatio: '1/1',
  boxSizing: 'border-box',
  transition: 'background 0.3s',
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
  '@media (max-width: 768px)': {
    width: 'calc(33.3333% - 8px)',
  },
  '@media (max-width: 576px)': {
    width: 'calc(50% - 6px)',
    padding: 8,
  },
})
const DateTime = styled.div({
  font: '400 18px/22px "Inter"',
})
const Content = styled.div({
  fontSize: 12,
  lineHeight: '17px',
  marginTop: 8,
})

const data = new Array(40).fill({
  date: '2021.05.21',
  time: '23:25',
  content: `私の日記の記録が一部表示されます。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
})

const PAGE_SIZE = 8

const MyDiary = () => {
  const [diaryCount, setDiaryCount] = useState(PAGE_SIZE)
  const [showLoadMore, setShowLoadMore] = useState(false)

  useEffect(
    () => {
      if (data.length > PAGE_SIZE) {
        setShowLoadMore(true)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data],
  )

  const onClickLoadMore = useCallback(
    () => {
      const updatedDiaryCount = diaryCount + PAGE_SIZE
      if (updatedDiaryCount >= data.length) {
        setShowLoadMore(false)
      }
      setDiaryCount(Math.min(data.length, updatedDiaryCount))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, diaryCount],
  )

  return (
    <Wrapper id='myDiary'>
      <Title>my diary</Title>
      <DiaryWrap>
        {data.slice(0, diaryCount).map((item, idx) => (
          <DiaryItem key={idx}>
            <DateTime>{item.date}</DateTime>
            <DateTime>{item.time}</DateTime>
            <Content>{item.content}</Content>
          </DiaryItem>
        ))}
      </DiaryWrap>
      {showLoadMore && (
        <Button onClick={onClickLoadMore}>自分の日記をもっと見る</Button>
      )}
    </Wrapper>
  )
}

export default React.memo(MyDiary)
