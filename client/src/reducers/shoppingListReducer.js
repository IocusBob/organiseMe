import { FETCH_SHOPPING_ITEMS } from '../actions/types'

export default function(state = [], action) {
    switch(action.type){
        case FETCH_SHOPPING_ITEMS:
            return action.payload;
        default:
            return state;
    }
};