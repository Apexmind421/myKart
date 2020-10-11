import axios from "../Helpers/axios";


export const login1 = (email, password) => {
    return async(dispatch)=>{
        dispatch({ type: "USER_SIGNIN_REQUEST", payload: { email, password } });
        try {
            const { data } = await axios.post("/login", { email, password });
            dispatch({ type: "USER_SIGNIN_SUCCESS", payload: data });
            //Cookie.set('userInfo', JSON.stringify(data));
        } 
        catch (error) {
            dispatch({ type: "USER_SIGNIN_FAIL", payload: error.message });
        }
        /*
        const res = await axios.post(`/login`,{

        })
        dispatch({
            type: USER_LOGIN_REQUEST,
            payload:{
                ...user
            }
        });*/
    }
}

export const LogIn = (user) => {
    console.log(user);
    return async(dispatch) => {
        dispatch({ type: "SIGNIN_REQUEST", payload: { ...user } });
        try {
            const { data } = await axios.post("/login", { ...user });
            dispatch({ type: "SIGNIN_SUCCESS", payload: data });
            //Cookie.set('userInfo', JSON.stringify(data));
        } 
        catch (error) {
            dispatch({ type: "USER_SIGNIN_FAIL", payload: error.message });
        }
    }
}
