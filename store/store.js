import {createStore,combineReducers} from 'redux';
import CountReducer from '../reducers/CountReducer';
import ProductReducer from '../reducers/ProductReducer';
import Todoreducer from '../reducers/Todoreducer';
import CartReducer from '../reducers/CartReducer';

let rootReducer = combineReducers({count: CountReducer, products:ProductReducer,cart: CartReducer, todo: Todoreducer});
const store = createStore(rootReducer);
export default store;