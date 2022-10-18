import './App.css';
import { Route, Switch } from 'wouter';
import Home from './components/Home';
import Form from './components/form/Index';
import Registered from './components/register/index'

function App() {
  return (
    <div className='App'>
      <Switch>

        <Route path='/'>
          <Home />
        </Route>

        <Route path='/form'>
          <Form />
        </Route>

        <Route path='/registered'>
          <Registered />
        </Route>

        <Route>
          <div className='ErrorPage'>
            404 Not found
          </div> 
        </Route>

      </Switch>
    </div>
  );
}

export default App;