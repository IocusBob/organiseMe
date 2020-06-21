import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todoReducer from './toDoReducer';


export default combineReducers({
    auth: authReducer,
    todos: todoReducer
});