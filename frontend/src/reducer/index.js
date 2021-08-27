import {combineReducers} from 'redux';
import { addToCart, userReducer } from './reducers';


const rootReducer = combineReducers({
    user:userReducer,
    cart:addToCart
})

export default rootReducer;