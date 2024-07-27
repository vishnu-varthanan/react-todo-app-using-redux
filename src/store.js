import {createStore, combineReducers, applyMiddleware} from 'redux'
import todoReducer from './reducers/todoReducers';
import { thunk } from 'redux-thunk';

const reducer =combineReducers({
    Todo : todoReducer
})

const initialState ={}

const middleWare = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleWare))



export default store;