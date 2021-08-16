import React, { createContext } from 'react'
import ReactLoading from "react-loading";
import { Redirect, Route } from 'react-router-dom';

export const varCtx = createContext(null);
export const Loading = () => <ReactLoading type="bubbles" color="#fff" />;
export const ProtectedDashRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={() => auth ? (<Redirect to="/dash/home" />) : (<Component />)} />
)
export const ProtectedLoginRoute = ({ auth, component: Component, ...rest }) => (
    <Route {...rest} render={() => auth ? (<Redirect to="/dash/home" />) : (<Component />)} />
)
export const Logo = () => <div className="navbarLogo">
    <span>HA</span>
    <span>SH</span>
</div>
