function authReducer(state = {loading: false, error: null}, action) {
    switch (action.type) {
        //Log In
        case "LOGIN_REQUEST":
            return { loading: true };
        case "LOGIN_SUCCESS":
            return { loading: false, userInfo: action.payload };
        case "LOGIN_FAIL":
            return { loading: false, error: action.payload };
        //Log out
        case "LOGOUT":
            return {};
        //Update
        case "UPDATE_REQUEST":
            return { loading: true };
        case "UPDATE_SUCCESS":
            return { loading: false, userInfo: action.payload };
        case "UPDATE_FAIL":
            return { loading: false, error: action.payload };
        //Register
        case "REGISTER_REQUEST":
        return { loading: true };
        case "REGISTER_SUCCESS":
            return { loading: false, userInfo: action.payload };
        case "REGISTER_FAIL":
            return { loading: false, error: action.payload };
        default: 
            return state;
    }
}
  
  export default authReducer;
