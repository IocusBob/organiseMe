import {
  FETCH_SHOPPING_ITEMS,
  CREATE_SHOPPING_ITEM,
  UPDATE_SHOPPING_ITEM_CHECKED,
  DELETE_SHOPPING_ITEMS,
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SHOPPING_ITEMS:
      return action.payload;
    case CREATE_SHOPPING_ITEM:
      return [...state, action.payload];
    case UPDATE_SHOPPING_ITEM_CHECKED:
      return state.map((shoppingItem) => {
        if (shoppingItem._id === action.payload) {
          shoppingItem.checked = !shoppingItem.checked;
          return shoppingItem;
        }
        return shoppingItem;
      });
    case DELETE_SHOPPING_ITEMS:
      return state.filter((shoppingItem) => {
        for (let i = 0; i < action.payload.length; i++) {
          if (action.payload[i] === shoppingItem._id) {
            return;
          }
        }
        return shoppingItem;
      });
    default:
      return state;
  }
}
