import * as Api from './../utils/Api';

export const SEARCH_POST = 'SEARCH_POST';

export function searchPost(query) {
    return dispatch => {
        Api.getPosts()
            .then(res => dispatch(fetchSearchPostSuccess(res, query)))
    }
}

function fetchSearchPostSuccess(data, query) {
    return {
        type: SEARCH_POST,
        payload: data,
        query: query
    }
}
