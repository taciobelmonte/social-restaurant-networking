import {
    FETCH_CATEGORIES,
} from '../actions'

export default function categoriesReducer (state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES :
            //console.log("FETCH CATEGORIES => ");
            return action.payload;
        default :
            return state
    }
}