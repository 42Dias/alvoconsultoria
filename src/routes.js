import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'
import Footer from './components/Footer'
import BeProvider from './pages/BeProvider'
import RegisterProvider from './pages/RegisterProvider'
import Formatting from './pages/Formatting'
import Apply from './pages/Apply'
import Thank from './pages/Thank'
import Erro from './pages/Erro'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/entrar' component={SignIn} />
        <Route exact path='/cadastrar' component={SignUp} />
        <Route exact path='/esqueceu-a-senha' component={ForgetPassword} />
        <Route exact path='/seja-provedor' component={BeProvider} />
        <Route
          exact
          path='/seja-provedor/cadastro-provedor'
          component={RegisterProvider}
        />
        <Route
          exact
          path='/seja-provedor/cadastro-provedor/formatacao'
          component={Formatting}
        />
        <Route
          exact
          path='/seja-provedor/cadastro-provedor/candidatar'
          component={Apply}
        />
        <Route
          exact
          path='/seja-provedor/cadastro-provedor/agradecimento'
          component={Thank}
        />
        <Route path='*' component={Erro} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default Routes
