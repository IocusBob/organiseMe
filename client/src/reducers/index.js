import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import todoReducer from './toDoReducer';
import shoppingListReducer from './shoppingListReducer';


export default combineReducers({
    auth: authReducer,
    todos: todoReducer,
    shoppingList: shoppingListReducer,
    form: formReducer
});