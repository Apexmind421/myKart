import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../StateProvider/rootReducer';

const store = createStore(rootReducer,  applyMiddleware(thunk));

export default store;