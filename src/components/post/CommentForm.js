import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
	const [text, setText] = useState('');

	const onSubmit = evt => {
		evt.preventDefault();
		addComment(postId, text);
		setText('');
	};

	const onChange = evt => {
		setText(evt.target.value)
	};

	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Add a Comment</h3>
			</div>
			<form className='form my-1' onSubmit={onSubmit}>
				<textarea
					name='text'
					placeholder='Comment on this post...'
					required
					value={text}
					onChange={onChange}
				/>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

CommentForm.propTypes = {
	postId: PropTypes.number.isRequired,
	addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
