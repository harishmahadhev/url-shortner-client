import axios from 'axios';
import Cookies from 'js-cookie';
const API = axios.create({ baseURL: "https://lrks.herokuapp.com/" });

API.interceptors.request.use((req) => {
    if (Cookies.get("--t")) {
        req.headers.Authorization = `${Cookies.get('--t')}`;
    }
    return req;
})

export const signin = (formdata) => API.post("/login/signin", formdata)
export const signup = (formdata) => API.post("/login/signup", formdata)
export const activate = (formdata) => API.post("/login/activate", formdata)
export const forgot = (formdata) => API.post("/login/forgot", formdata)
export const reset = (formdata) => API.post("/login/reset", formdata)
export const shorturl = (formdata) => API.post("/shorturl", formdata)
export const geturl = (formdata) => API.get("/shorturl", formdata)