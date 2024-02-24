import styled from '@emotion/styled'
import Listing from './Listing'
import Recommend from './Recommend'
import {ColumnType} from './utils'
import {useState} from 'react'

const Wrapper = styled.div({
  width: '100%',
  maxWidth: 960,
  padding: '0 16px',
  margin: 'auto',
  '@media (max-width: 1024px)': {
    boxSizing: 'border-box',
  },
  '@media (max-width: 576px)': {
    padding: '0 6px',
  },
})

const ColumnPage = () => {
  const [columnType, setColumnType] = useState<ColumnType>()

  const onSelectType = (updatedType: ColumnType) => {
    setColumnType(updatedType === columnType ? undefined : updatedType)
  }

  return (
    <Wrapper>
      <Recommend type={columnType} onSelect={onSelectType} />
      <Listing type={columnType} />
    </Wrapper>
  )
}

export default ColumnPage
