import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './pages/dashboard/components/Layout';
import Home from './pages/Home/Home';
import { Activate } from './pages/Home/Login/Activate';
import ForgotPassword from './pages/Home/Login/ForgotPassword';
import ResetPassword from './pages/Home/Login/ResetPassword';
import { ProtectedDashRoute, ProtectedLoginRoute, varCtx } from './shared';
import * as api from './api/index'

function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [Message, setMessage] = useState("");
  const getUrlData = async () => { const { data } = await api.shorturl() };

  useEffect(() => {

  })
  return (
    <varCtx.Provider value={{ loading, setLoading, Message, setMessage, setAuth }}>
      <Switch>
        <ProtectedLoginRoute exact path="/" auth={auth} component={Home} />
        <ProtectedDashRoute path="/dash" auth={auth} component={Layout} />
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route exact path="/activate/:token">
          <Activate />
        </Route>
        <Route exact path="/reset/:token">
          <ResetPassword />
        </Route>
      </Switch >
    </varCtx.Provider>
  );
}

export default App;

