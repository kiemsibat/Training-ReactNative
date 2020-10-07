import {createStore,combineReducers} from 'redux';
import count from './reducers/count'
const rootReducer = combineReducers({
    count,
});
const store = createStore(rootReducer);
export default store;