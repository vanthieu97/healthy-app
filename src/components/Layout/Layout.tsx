import styled from '@emotion/styled'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})
const MainContent = styled.main({
  flex: 1,
})

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  )
}

export default Layout
