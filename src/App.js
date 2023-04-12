import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <ProtectedRoute exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
