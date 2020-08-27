import { FETCH_SHOPPING_ITEMS, UPDATE_SHOPPING_ITEM_CHECKED } from '../actions/types'

export default function(state = [], action) {
    switch(action.type){
        case FETCH_SHOPPING_ITEMS:
            return action.payload;
        case UPDATE_SHOPPING_ITEM_CHECKED:
            return action.payload;
        default:
            return state;
    }
};