import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
	const [postData, setPostData] = useState({
		title: '',
		body: ''
	});

	const { title, body } = postData;

	const onSubmit = evt => {
		evt.preventDefault();
		addPost(postData);
		setPostData({
			title: '',
			body: ''
		});
	};

	const onChange = evt => {
		setPostData({
			...postData,
			[evt.target.name]: evt.target.value
		})
	};

	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Say Something...</h3>
			</div>
			<form className='form my-1' onSubmit={onSubmit}>
				<input
					className='mb-1'
					type='text'
					name='title'
					placeholder='Put the post title here...'
					required
					value={title}
					onChange={onChange}
				/>
				<textarea
					name='body'
					placeholder='Put the post text here...'
					required
					value={body}
					onChange={onChange}
				/>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
