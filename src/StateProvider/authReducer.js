const initState ={
    name : "admin"
};

export default (state = initState,action) => {
    console.log(action)

    switch(action.type){
        case "SIGNIN_REQUEST":
            state = {
                ...state,
                ...action.payload
            }
            break;
    }
    return state;
}

