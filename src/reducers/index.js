import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import news from "./news";

const reducer = combineReducers ({
    news,
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store