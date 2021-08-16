import Cookies from 'js-cookie';
import React, { createContext } from 'react'
import ReactLoading from "react-loading";
import { Redirect, Route } from 'react-router-dom';

export const varCtx = createContext(null);
export const Loading = ({ color }) => <ReactLoading type="bubbles" color={color ? color : "#fff"} />;
export const ProtectedDashRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={() => auth ? (<Component />) : (<Redirect to="/" />)} />
)
export const ProtectedLoginRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={() => auth ? (<Redirect to="/dash/home" />) : (<Component />)} />
)
export const Logo = () => <div className="navbarLogo">
    <span>HA</span>
    <span>SH</span>
</div>

export const getHostname = (url) => {
    return new URL(url).hostname;
}
export const userId = Cookies.get("--i");
export const userName = Cookies.get("--n");
export function refreshPage() {
    window.location.reload();
}