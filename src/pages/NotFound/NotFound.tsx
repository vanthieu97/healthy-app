import styled from '@emotion/styled'
import {Link} from 'react-router-dom'

const Wrapper = styled.div({
  textAlign: 'center',
  marginBottom: 64,
})

const NotFound = () => {
  return (
    <Wrapper>
      <h1>Not Found</h1>
      <Link to='/'>Go to Home Page</Link>
    </Wrapper>
  )
}

export default NotFound
