import {
    SEARCH_POST,
} from '../actions'

export default function categoriesReducer (state = [], action) {
    switch (action.type) {
        case SEARCH_POST :
            //console.log("SEARCH CATEGORIES => ", action.payload);
            return action.payload.filter( (element) => ( (element.title.toLowerCase().includes(action.query.toLowerCase())) ||
            (element.category.toLowerCase().includes(action.query.toLowerCase())) ||
            (element.author.toLowerCase().includes(action.query.toLowerCase()))));
        default :
            return state
    }
}