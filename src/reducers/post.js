import {
	GET_POSTS,
	GET_POST,
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	POST_ERROR,
	ADD_COMMENT
} from '../actions/types';

const initialState = {
	posts: [],
	post: null,
	loading: true,
	error: ''
};

const post = (state = initialState, action) => {
	switch(action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case GET_POST:
			return {
				...state,
				post: action.payload,
				loading: false
			};
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts],
				loading: false
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload),
				loading: false
			};
		case UPDATE_POST:
			return {
				...state,
				posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post),
				loading: false
			};
		case POST_ERROR:
			return {
				...state,
				error: 'Something went wrong. Please try again',
				loading: false
			};
		case ADD_COMMENT:
			return {
				...state,
				post: {
					...state.post,
					comments: [action.payload, ...state.post.comments]
				},
				loading: false
			};
		default:
			return state;
	}
};

export default post;
