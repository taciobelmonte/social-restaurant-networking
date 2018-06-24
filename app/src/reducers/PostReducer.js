import {
    ADD_POST,
    REMOVE_POST,
    EDIT_POST,
    VOTE_POST,
    FETCH_POSTS,
    GET_POST
} from '../actions'

export default function postReducer (state = [], action) {
    switch (action.type) {
        case ADD_POST :
            return [...state, action.payload];

        case GET_POST :
            return [action.payload];

        case REMOVE_POST :
            return{
                dados: state.dados.filter(post => post.id !== action.payload.id)
            }

        case EDIT_POST :
            return{
                dados: state.dados.map(function(element){
                    if(element.id === action.payload.id)
                        return action.payload;
                    else
                        return element;
                })
            }

        case VOTE_POST :
            return{
                dados: state.dados.map(item => {
                    if (item.id === action.payload.id)
                        item.voteScore = action.payload.voteScore;
                    return item;
                })
            }

        case FETCH_POSTS :
            if(action.payload !== undefined) {
                // return action.payload;
                return {
                    order: action.order,
                    dados: action.payload
                };

            }
                // if(action.order === "vote"){
                //      return action.payload.sort(function(a,b) {return (a.voteScore < b.voteScore) ? 1 : ((b.voteScore < a.voteScore) ? -1 : 0);} );
                //  }else{
                //      return action.payload.sort(function(a,b) {return (a.timestamp < b.timestamp) ? 1 : ((b.timestamp < a.timestamp) ? -1 : 0);} );
                //  }
            break;
        default :
            return state
    }
}