import styled from '@emotion/styled'
import Button from 'components/Button'
import React, {useEffect, useState} from 'react'
import {Meal, MealType, getMeals} from './utils'

const Wrapper = styled.div({
  maxWidth: 960,
  margin: 'auto',
  marginBottom: 64,
})
const ItemList = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: 8,
  rowGap: 8,
  padding: 8,
})
const Item = styled.li({
  width: 'calc(25% - 6px)',
  aspectRatio: '1/1',
  position: 'relative',
  fontSize: 0,
  lineHeight: 0,
  '@media (max-width: 768px)': {
    width: 'calc(33.3333% - 5.4px)',
  },
  '@media (max-width: 576px)': {
    width: 'calc(50% - 4px)',
  },
})
const Image = styled.img({
  objectFit: 'cover',
})
const Title = styled.span({
  position: 'absolute',
  left: 0,
  bottom: 0,
  backgroundColor: '#FFCC21',
  padding: '7px 22px',
  color: '#fff',
  font: '400 15px/18px "Inter"',
})

const MealHistory = ({type}: {type?: MealType}) => {
  const [mealData, setMealData] = useState<Meal[]>([])
  const [offset, setOffset] = useState(0)
  const [ended, setEnded] = useState(false)

  const fetchData = async (offset: number) => {
    try {
      const response = await getMeals({offset, type})
      setMealData((prev) =>
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
      <ItemList>
        {mealData.map(({title, url, id}) => (
          <Item key={id}>
            <Image src={`./images/${url}`} alt={title} />
            <Title>{title}</Title>
          </Item>
        ))}
      </ItemList>
      {!ended && <Button onClick={onClickLoadMore}>記録をもっと見る</Button>}
    </Wrapper>
  )
}

export default React.memo(MealHistory)
