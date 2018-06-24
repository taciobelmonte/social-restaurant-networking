//API to request data via HTTP
const ROOT = "http://localhost:3001";

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

//Categories
export const getCategories = () =>{
    return fetch(`${ROOT}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);
};

export const getPosts = () =>{
    return fetch(`${ROOT}/posts`, { headers })
        .then(res => res.json())
        .then(data => data);
};

export const getPost = (id) => {
    return fetch(`${ROOT}/posts/${id}`, { headers })
        .then(data => data.json())
};

export const addPost = (post) => {
    return fetch(`${ROOT}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(data => data.json())
};

export const votePost = (id, option) => {
    return fetch(`${ROOT}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option: option})
    })
        .then(data => data.json())
};

export const removePost = (id) =>{
    return fetch(`${ROOT}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)
};

export const getCommentsForPost = (id) =>{
    return fetch(`${ROOT}/posts/${id}/comments`, { headers })
        .then(res => res.json())
        .then(data => data)
};

export const getComment = (id) =>{
    return fetch(`${ROOT}/comments/${id}`, { headers })
        .then(res => res.json())
        .then(data => data)
};


export const voteComment = (commentId, option) =>{
    return fetch(`${ROOT}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: option})
    }).then(res => res.json())
};

export const removeComment = (commentId) =>{

    return fetch(`${ROOT}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)
};

export const addComment = (comment) =>{
    console.log(comment);
    return fetch(`${ROOT}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(data => data.json())
};

export const editComment = (commentId, author, body) =>{
    console.log("Author", author);
    console.log("Body", body);
    return fetch(`${ROOT}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({commentId, author, body})
    }).then(res => res.json())
};

export const editPost = (id, title, category, author, body) =>{
    return fetch(`${ROOT}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, title, category, author, body})
    }).then(res => res.json())
};