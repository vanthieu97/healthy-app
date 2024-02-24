import styled from '@emotion/styled'
import BodyRecord from './BodyRecord'
import ButtonNavigation from './ButtonNavigation'
import MyDiary from './MyDiary'
import MyExercise from './MyExercise'
import {useEffect} from 'react'

const Wrapper = styled.div({
  width: '100%',
  maxWidth: 960,
  padding: '0 16px',
  margin: 'auto',
  '@media (max-width: 1024px)': {
    boxSizing: 'border-box',
  },
  '@media (max-width: 768px)': {
    padding: '0 8px',
  },
})

const MyRecord = () => {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({behavior: 'smooth', block: 'center'})
      }, 300)
    }
  }, [])

  return (
    <Wrapper>
      <ButtonNavigation />
      <BodyRecord />
      <MyExercise />
      <MyDiary />
    </Wrapper>
  )
}

export default MyRecord
