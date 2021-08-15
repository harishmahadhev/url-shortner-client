import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './pages/dashboard/components/Layout';
import Home from './pages/Home/Home';
function App() {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dash">
        <Layout />
      </Route>
    </Switch >
  );
}

export default App;
