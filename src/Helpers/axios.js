import axios from "axios";
import { api } from "./URLConfig";
import Cookie from 'js-cookie';
//const token = window.localStorage.getItem('token');
//console.log("Token in API is "+window.localStorage.getItem('token'));
//const userInfo = Cookie.getJSON('userInfo') || null;
//const token = userInfo.token || null;
const token = Cookie.get('token');
console.log("Token in API is "+token);
//console.log(`Token in API is {userInfo.token}`);
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjgxNmZkMWNmYTU3OTIxOTRjYjEzNjUiLCJyb2xlIjoidXNlciIsImlhdCI6MTYwMzM2MDY5OSwiZXhwIjoxNjAzMzY0Mjk5fQ.MkkVsU4eBYzcOztP3sLaX3Qoyk6v52U2IFJXZCKgBbA";
const axiosInstance =axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});

export default axiosInstance;
