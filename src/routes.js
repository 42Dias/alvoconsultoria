import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/entrar' component={SignIn} />
        <Route exact path='/cadastrar' component={SignUp} />
        <Route exact path='/esqueceu-a-senha' component={ForgetPassword} />
        <Route path='*' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
