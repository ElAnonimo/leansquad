import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost } from '../../actions/post';

const PostItem = ({ showPostBtn, updatePost, post }) => {
	const [postData, setPostData] = useState({
		title: '',
		body: '',
		id: '',
		author: ''
	});

	useEffect(() => {
		setPostData({
			title: post ? post.title : '',
			body: post ? post.body : '',
			id: post ? post.id : '',
			author: post ? post.author : ''
		});
	}, [post]);

	const {
		title,
		body,
		id,
		author
	} = postData;

	const onSubmit = evt => {
		evt.preventDefault();
		updatePost(id, { title, body });
	};

	const onChange = evt => {
		setPostData({
			...postData,
			[evt.target.name]: evt.target.value
		})
	};

	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<FontAwesomeIcon icon={faUser} size='3x' />
				<h4>{author ? author : 'author unknown'}</h4>
			</div>
			<form className='form my-1' onSubmit={onSubmit}>
				Title:
				<input
					type='text'
					className='post-title'
					value={title}
					name='title'
					required
					onChange={onChange}
				/>
				<textarea
					className='my-1'
					value={body}
					name='body'
					required
					onChange={onChange}
				/>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
				{showPostBtn &&
					<Link to={`/posts/${id}`} className='btn btn-primary'>
						Go to post
					</Link>
				}
			</form>
		</div>
	);
};

PostItem.defaultProps = {
	showPostBtn: true
};

// author and body were not marked as required since the posts received from the server could
// have those not set
PostItem.propTypes = {
	showPostBtn: PropTypes.bool.isRequired,
	updatePost: PropTypes.func.isRequired,
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string,
		body: PropTypes.string
	}).isRequired
};

export default connect(null, { updatePost })(PostItem);
