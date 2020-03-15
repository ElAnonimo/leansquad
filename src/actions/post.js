import axios from 'axios';
import {
	GET_POSTS,
	GET_POST,
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	POST_ERROR,
	ADD_COMMENT
} from './types';

const API_PATH = 'https://simpleblogapi.herokuapp.com';

const config = {
	headers: {
		'Content-Type': 'application/json'
	}
};

// get all posts
export const getPosts = () => async dispatch => {
	try {
		const res = await axios.get(`${API_PATH}/posts`);

		dispatch({
			type: GET_POSTS,
			payload: res.data
		});
	} catch(ex) {
		dispatch({
			type: POST_ERROR
		});
	}
};

// get post by id
export const getPost = postId => async dispatch => {
	try {
		const res = await axios.get(`${API_PATH}/posts/${postId}?_embed=comments`);

		dispatch({
			type: GET_POST,
			payload: res.data
		});
	} catch(ex) {
		dispatch({
			type: POST_ERROR
		});
	}
};

// add comment to post
export const addComment = (postId, text) => async dispatch => {
	try {
		const res = await axios.post(`${API_PATH}/comments`, { postId, body: text }, config);

		dispatch({
			type: ADD_COMMENT,
			payload: res.data
		})
	} catch(ex) {
		dispatch({
			type: POST_ERROR
		});
	}
};

// add post
export const addPost = postData => async dispatch => {
	try {
		const res = await axios.post(`${API_PATH}/posts`, postData, config);

		dispatch({
			type: ADD_POST,
			payload: res.data
		});
	} catch(ex) {
		dispatch({
			type: POST_ERROR
		});
	}
};

// update post
export const updatePost = (postId, postData) => async dispatch => {
	try {
		const res = await axios.put(`${API_PATH}/posts/${postId}`, postData, config);

		dispatch({
			type: UPDATE_POST,
			payload: res.data
		});
	} catch(ex) {
		dispatch({
			type: POST_ERROR
		});
	}
};

// delete post
export const deletePost = postId => async dispatch => {
	try {
		await axios.delete(`${API_PATH}/posts/${postId}`);

		dispatch({
			type: DELETE_POST,
			payload: postId
		});
	} catch(ex) {
		dispatch({
			type: POST_ERROR
		});
	}
};
