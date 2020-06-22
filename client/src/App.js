import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const Home = lazy(e => import('./views/home/Home'))
import Spinner from './components/utils/spinner/Spinner'
import './App.css'

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Suspense>
    </>
  )
}

export default App
