import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Init, SignIn, SignUp, ForgetPassword, PageNotFound } from './routes'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/SignIn'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Switch>
        <Login />
        <Route exact path={Init} component={Home} />
        <Route path={SignIn} component={SignIn} />
        <Route path={SignUp} component={SignUp} />
        <Route path={ForgetPassword} component={ForgetPassword} />
        <Route path={PageNotFound} component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
