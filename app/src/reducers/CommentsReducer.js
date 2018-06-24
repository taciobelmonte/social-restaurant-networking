import {
    FETCH_COMMENTS,
    VOTE_COMMENT,
    ADD_COMMENT,
    REMOVE_COMMENT,
    EDIT_COMMENT,
} from '../actions'

export default function categoriesReducer (state = [], action) {
    switch (action.type) {
        case FETCH_COMMENTS :
            return action.payload;
        case VOTE_COMMENT :
            return state.map(item => {
                if (item.id === action.payload.id)
                    item.voteScore = action.payload.voteScore;
                return item;
            });
        case ADD_COMMENT :
            return [...state, action.payload];
        case REMOVE_COMMENT :
            return state.filter(comment => comment.id !== action.payload.id);
        case EDIT_COMMENT:
            console.log("EDIT_COMMENT => ", action.payload);
            return state;
        default :
            return state
    }
}