import * as Api from './../utils/Api';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchCategories() {
    return dispatch => {
        Api.getCategories()
            .then(res => dispatch(fetchCategoriesSuccess(res)))
    }
}

function fetchCategoriesSuccess(data) {
    return {
        type: FETCH_CATEGORIES,
        payload: data
    }
}