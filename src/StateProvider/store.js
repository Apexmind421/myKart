import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import rootReducer from '../StateProvider/rootReducer';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const userInfo = Cookie.getJSON('userInfo') || null;
console.log("Token in store is "+Cookie.get('token'));
//const userInfo = JSON.parse(localStorage.getItem('userInfo')) || null;
//const userInfo = (localStorage.getItem('userInfo')) ||null;
//console.log("userInfo is "+JSON.stringify(localStorage.getItem('userInfo')));
const cart = Cookie.getJSON('cart') || [];
const initialState = {
   // auth : {userInfo},
   
   // cart: { cart: {}, shipping: {}, payment: {} },
};
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;