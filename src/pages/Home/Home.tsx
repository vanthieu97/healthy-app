import styled from '@emotion/styled'
import {useState} from 'react'
import Achievement from './Achievement'
import InputNavigation from './InputNavigation'
import MealHistory from './MealHistory'
import {MealType} from './utils'

const Wrapper = styled.div({
  width: '100%',
  maxWidth: 1280,
  margin: 'auto',
})

const Home = () => {
  const [type, setType] = useState<MealType | undefined>()

  const onClickFilter = (updatedType?: MealType) => {
    setType(updatedType === type ? undefined : updatedType)
  }

  return (
    <Wrapper>
      <Achievement />
      <InputNavigation activeType={type} onSelect={onClickFilter} />
      <MealHistory type={type} />
    </Wrapper>
  )
}

export default Home
