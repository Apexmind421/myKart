import axios from "../Helpers/axios";
import Cookie from 'js-cookie';

export const LogIn = (user1) => {
    //console.log(user);
    return async(dispatch) => {
        dispatch({ type: "LOGIN_REQUEST", payload: { ...user1 } });
        try {
            const { data } = await axios.post("/login", { ...user1 });
            //const {data} = {token,user};
            dispatch({ type: "LOGIN_SUCCESS", payload: data });
            Cookie.set('userInfo', JSON.stringify(data));
            Cookie.set('token', data.token);
            //localStorage.setItem('token', data.token);
            //localStorage.setItem('user', JSON.stringify(user));
            //localStorage.setItem('userInfo', data);
            console.log("Token is "+Cookie.get('token'));
            console.log("Login data is "+JSON.stringify(data));
        } 
        catch (error) {
            dispatch({ type: "LOGIN_FAIL", payload: error.message });
        }
    }
}

export const SignUp = (user1) => {
    return async(dispatch) => {
        dispatch({ type: "REGISTER_REQUEST", payload: { ...user1 } });
        try {
            const { token, user } = await axios.post("/register", { ...user1 });
            const {data} = {token,user};
            dispatch({ type: "REGISTER_SUCCESS", payload: data });
            Cookie.set('userInfo', JSON.stringify(data));
            Cookie.set('token', data.token);
            //localStorage.setItem('token', token);
            //localStorage.setItem('user', JSON.stringify(user));
            //localStorage.setItem('userInfo', data);
            console.log(JSON.stringify(data));
        } catch (error) {
            dispatch({ type: "REGISTER_FAIL", payload: error.message });
        }
    }
}

export const LogOut = ()=> 
    (dispatch)=>{
        //localStorage.clear();
        Cookie.remove("userInfo");
        dispatch({type:"LOGOUT"});
    }

