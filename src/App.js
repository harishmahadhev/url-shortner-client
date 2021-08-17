import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './pages/dashboard/components/Layout';
import Home from './pages/Home/Home';
import { Activate } from './pages/Home/Login/Activate';
import ForgotPassword from './pages/Home/Login/ForgotPassword';
import * as api from "./api/index";
import ResetPassword from './pages/Home/Login/ResetPassword';
import { ProtectedDashRoute, ProtectedLoginRoute, varCtx } from './shared';
import Cookies from 'js-cookie';
function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [Message, setMessage] = useState("");
  const [urlData, setUrlData] = useState([]);

  const getUrlData = async () => {
    setLoading(true);
    try {
      const { data } = await api.geturl();
      setUrlData(data);
      setLoading(false);

    } catch (error) {
      const { data } = error.response;
      setLoading(false);
      console.log(data);
    }
  };
  useEffect(() => {
    getUrlData();
    if (Cookies.get('--t')) {
      setAuth(true)
    }
  }, []);
  return (
    <varCtx.Provider value={{ urlData, loading, setLoading, Message, setMessage, setAuth }}>
      <Switch>
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
        <ProtectedLoginRoute exact path="/" auth={auth} component={Home} />
      </Switch >
    </varCtx.Provider >
  );
}

export default App;

