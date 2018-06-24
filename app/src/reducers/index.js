/**
 * Created by Tacio on 05/03/18.
 */

import { combineReducers } from 'redux';
import PostReducer from './PostReducer';
import CategoriesReducer from './CategoriesReducer';
import CommentsReducer from './CommentsReducer';
import SearchReducer from './SearchReducer';

const reducer = combineReducers({
    posts: PostReducer,
    categories: CategoriesReducer,
    comments: CommentsReducer,
    search: SearchReducer
});

export default reducer;