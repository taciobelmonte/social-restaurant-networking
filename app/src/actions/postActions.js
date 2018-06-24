import * as Api from './../utils/Api';

export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const EDIT_POST = 'EDIT_POST';
export const VOTE_POST = 'VOTE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const GET_POST = 'GET_POST';

export function fetchPosts(order) {
    return dispatch => {
        Api.getPosts()
            .then(res => dispatch(fetchPostsSuccess(res, order)))
    }
}

function fetchPostsSuccess(data, order) {
    return {
        type: FETCH_POSTS,
        payload: data,
        order: order
    }
}

export function getPost(id) {
    return dispatch => {
        Api.getPost(id)
            .then(res => dispatch(getPostSuccess(res)))
    }
}

function getPostSuccess(data) {
    return {
        type: GET_POST,
        payload: data,
    }
}

export function addPost(post){

    return dispatch => {
        Api.addPost(post).then(res => dispatch(addPostSuccess(res)))
    };
}

function addPostSuccess(data){
    return {
        type: ADD_POST,
        payload: data
    }
}

export function editPost(id, title, category, author, body){
    return dispatch => {
        Api.editPost(id, title, category, author, body).then(res => dispatch(editPostSuccess(res)))
    };
}

function editPostSuccess(data){
    return {
        type: EDIT_POST,
        payload: data,
    }
}

export function votePost(id, option){
    return dispatch => {
        Api.votePost(id, option).then(res => dispatch(votePostSuccess(res)))
    };
}

export function votePostSuccess(data){
    return {
        type: VOTE_POST,
        payload: data,
    }
}

export function removePost(id){
    return dispatch => {
        Api.removePost(id).then(res => dispatch(removePostSuccess(res)))
    };
}

export function removePostSuccess(data) {
    return {
        type: REMOVE_POST,
        payload: data
    }
}