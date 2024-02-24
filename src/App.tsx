import Layout from 'components/Layout'
import {lazy, ReactNode, Suspense as ReactSuspense} from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const MyRecord = lazy(() => import('./pages/MyRecord'))
const ColumnPage = lazy(() => import('./pages/ColumnPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

interface SuspenseProps {
  component: ReactNode
}

const Suspense = ({component}: SuspenseProps) => (
  <ReactSuspense fallback={<span>Loading...</span>}>{component}</ReactSuspense>
)

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Suspense component={<Home />} />} />
          <Route
            path='/my-record'
            element={<Suspense component={<MyRecord />} />}
          />
          <Route
            path='/column'
            element={<Suspense component={<ColumnPage />} />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
