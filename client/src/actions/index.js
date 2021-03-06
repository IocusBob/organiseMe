import axios from 'axios';
// import history from '../history';

import {
  FETCH_USER,
  FETCH_TODOS,
  FETCH_SHOPPING_ITEMS,
  CREATE_SHOPPING_ITEM,
  UPDATE_SHOPPING_ITEM_CHECKED,
  DELETE_SHOPPING_ITEMS,
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get(
    'https://gist.githubusercontent.com/delapuente/9001607/raw/67feae941c38046d0f043581cfe29862edef62fa/TODO%2520list%2520JSON%2520sample'
  );
  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const createShoppingItem = (formValues) => async (dispatch) => {
  // Server responds with newly created object
  const res = await axios.post('/api/shoppingItem/create', formValues);
  dispatch({ type: CREATE_SHOPPING_ITEM, payload: res.data });
};

export const updateShoppingItemChecked = (id, checked) => async (dispatch) => {
  const formValues = { id, checked };
  // Server responds with id of updated shopping item
  const res = await axios.post('/api/shoppingItem/updateChecked', formValues);
  dispatch({ type: UPDATE_SHOPPING_ITEM_CHECKED, payload: res.data });
};

export const fetchShoppingItems = () => async (dispatch) => {
  const res = await axios.get('/api/shoppingItems');
  dispatch({ type: FETCH_SHOPPING_ITEMS, payload: res.data });
};

export const deleteShoppingItems = (shoppingItemsArray) => async (dispatch) => {
  // returns an array of deleted item ids
  const res = await axios.post('/api/shoppingItems/delete', {
    shoppingList: shoppingItemsArray,
  });
  dispatch({ type: DELETE_SHOPPING_ITEMS, payload: res.data });
};
