import styled from '@emotion/styled'
import Button from 'components/Button'
import React, {useEffect, useState} from 'react'
import {Column, ColumnType, getColumns} from './utils'

const Wrapper = styled.div({
  marginTop: 56,
  marginBottom: 64,
  '@media (max-width: 768px)': {
    marginTop: 40,
    marginBottom: 40,
  },
})
const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 8,
  rowGap: 18,
  marginBottom: 24,
  '@media (max-width: 576px)': {
    columnGap: 6,
    rowGap: 12,
  },
})
const Item = styled.li({
  width: 'calc(25% - 6px)',
  '@media (max-width: 768px)': {
    width: 'calc(33.3333% - 6px)',
  },
  '@media (max-width: 576px)': {
    width: 'calc(50% - 3px)',
  },
})
const Image = styled.div({
  position: 'relative',
  lineHeight: 0,
  img: {
    aspectRatio: '1.625/1',
  },
})
const DateTime = styled.span({
  position: 'absolute',
  bottom: 0,
  left: 0,
  padding: '3px 6px',
  boxSizing: 'border-box',
  backgroundColor: '#FFCC21',
  color: '#fff',
  font: '400 15px/30px "Inter"',
  '@media (max-width: 576px)': {
    fontSize: 12,
    padding: '2px 4px',
  },
})
const Title = styled.div({
  marginTop: 8,
  fontSize: 15,
  lineHeight: '22px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
  '@media (max-width: 576px)': {
    fontSize: 12,
    lineHeight: '18px',
  },
  '@media (max-width: 480px)': {
    fontSize: 10,
    lineHeight: '15px',
  },
})
const Tag = styled.div({
  color: '#FF963C',
  fontSize: 12,
  lineHeight: '22px',
})

const Listing = ({type}: {type?: ColumnType}) => {
  const [columnData, setColumnData] = useState<Column[]>([])
  const [offset, setOffset] = useState(0)
  const [ended, setEnded] = useState(false)

  const fetchData = async (offset: number) => {
    try {
      const response = await getColumns({offset, type})
      setColumnData((prev) =>
        offset ? [...prev, ...response.data] : response.data,
      )
      setOffset(response.offset + response.size)
      setEnded(response.ended)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  const onClickLoadMore = () => {
    fetchData(offset)
  }

  return (
    <Wrapper>
      <List>
        {columnData.map((item, idx) => (
          <Item key={item.id}>
            <Image>
              <img src={`./images/${item.url}`} alt={`img-column-${idx + 1}`} />
              <DateTime>{item.datetime}</DateTime>
            </Image>
            <Title>{item.title}</Title>
            <Tag>{item.tags.join(' ')}</Tag>
          </Item>
        ))}
      </List>
      {!ended && <Button onClick={onClickLoadMore}>コラムをもっと見る</Button>}
    </Wrapper>
  )
}

export default React.memo(Listing)
