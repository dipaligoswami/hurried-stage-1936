import {createStore,combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import {productReducer} from "./redux/reducer/productReducer"
import {brandsReducer} from "./redux/reducer/brandsReducer"
import {productFormReducer} from "./redux/reducer/productformReducer"
import {usesReducer} from "./redux/reducer/usesReducer"
import { itemReducer } from './redux/reducer/itemsReducer';

const rootReducer = combineReducers({
    productReducer,
    brandsReducer,
    productFormReducer,
    usesReducer,
    itemReducer
})
const intialState = {
    products:[],
    brands:[],
    uses:[],
    forms:[],
    items:[]
}
const middleware = [thunk]
const store =createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store

/*
   "@redux-devtools/extension": "^3.2.2",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    */