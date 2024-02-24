import styled from '@emotion/styled'
import React from 'react'

const Wrapper = styled.div({
  marginTop: 56,
  backgroundColor: '#2E2E2E',
  width: '100%',
  height: 264,
  padding: '16px 24px',
  boxSizing: 'border-box',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  '@media (max-width: 768px)': {
    marginTop: 40,
    padding: '12px 16px',
  },
})
const TitleWrap = styled.div({
  display: 'flex',
  columnGap: 24,
  alignItems: 'center',
  color: '#fff',
  textTransform: 'uppercase',
  'span:first-of-type': {
    font: '400 15px/18px "Inter"',
  },
  'span:last-child': {
    font: '400 22px/27px "Inter"',
  },
  '@media (max-width: 576px)': {
    'span:first-of-type': {
      fontSize: 14,
    },
    'span:last-child': {
      fontSize: 18,
    },
  },
})
const ExerciseList = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: 6,
  },
  '&::-webkit-scrollbar-track': {
    background: '#777777',
    borderRadius: 3,
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#FFCC21',
    borderRadius: 3,
  },
})
const ExerciseItem = styled.li({
  flex: '50%',
  padding: '0 32px 0 16px',
  boxSizing: 'border-box',
  color: '#fff',
  position: 'relative',
  '&:before': {
    content: '""',
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 16,
    left: 0,
  },
  '@media (max-width: 576px)': {
    flex: '100%',
    padding: '0 16px 0 0',
  },
})
const ItemContent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '8px 0 2px',
  borderBottom: 'solid 1px #777777',
  '@media (max-width: 768px)': {
    fontSize: 14,
  },
})
const Kcal = styled.span({
  color: '#FFCC21',
  font: '400 15px/18px "Inter"',
  display: 'block',
  '@media (max-width: 768px)': {
    fontSize: 12,
  },
})
const Min = styled.span({
  color: '#FFCC21',
  font: '400 18px/22px "Inter"',
  '@media (max-width: 768px)': {
    fontSize: 16,
  },
})

const data = new Array(50).fill({
  title: '家事全般（立位・軽い）',
  kcal: '26kcal',
  min: '10 min',
})

const MyExercise = () => {
  return (
    <Wrapper id='myExercise'>
      <TitleWrap>
        <span>
          body
          <br />
          exercise
        </span>
        <span>2021.05.21</span>
      </TitleWrap>
      <ExerciseList>
        {data.map((item, idx) => (
          <ExerciseItem key={idx}>
            <ItemContent>
              <div>
                {item.title}
                <Kcal>{item.kcal}</Kcal>
              </div>
              <div>
                <Min>{item.min}</Min>
              </div>
            </ItemContent>
          </ExerciseItem>
        ))}
      </ExerciseList>
    </Wrapper>
  )
}

export default React.memo(MyExercise)
