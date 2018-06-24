import * as Api from './../utils/Api';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';


export function fetchComments(id) {
    return dispatch => {
        Api.getCommentsForPost(id)
            .then(res => dispatch(fetchCommentsSuccess(res)))
    }
}

export function fetchCommentsSuccess(data){
    return {
        type: FETCH_COMMENTS,
        payload: data
    }
}

export function voteComment(id, option){
    return dispatch => {
        Api.voteComment(id, option).then(res => dispatch(voteCommentSuccess(res)))
    };
}

export function voteCommentSuccess(data){
    return {
        type: VOTE_COMMENT,
        payload: data,
    }
}

export function removeComment(id){
    return dispatch => {
        Api.removeComment(id).then(res => dispatch(removeCommentSuccess(res)))
    };
}

export function removeCommentSuccess(data){
    return {
        type: REMOVE_COMMENT,
        payload: data
    }
}

export function addComment(comment) {
    return dispatch => {
        Api.addComment(comment).then(res => dispatch(addCommentSuccess(res)))
    }
}

export function addCommentSuccess(data){
    return {
        type: ADD_COMMENT,
        payload: data
    }
}

export function editComment(commentId, author, body) {
    return dispatch => {
        Api.editComment(commentId, author, body).then(res => dispatch(editCommentSuccess(res)))
    }
}

export function editCommentSuccess(data){
    return {
        type: EDIT_COMMENT,
        payload: data
    }
}