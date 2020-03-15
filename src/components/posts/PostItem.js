import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const PostItem = ({ showPostBtn, post: {
	id,
	title,
	author,
	body
}}) => {
	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<FontAwesomeIcon icon={faUser} size='3x' />
				<h4>{author ? author : 'author unknown'}</h4>
			</div>
			<div>
				<p>Title: <span className='post-title'>{title}</span></p>
				<p className='my-1'>{body}</p>
				{showPostBtn &&
					<Link to={`/posts/${id}`} className='btn btn-primary'>
						Go to post
					</Link>
				}
			</div>
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
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string,
		body: PropTypes.string
	}).isRequired
};

export default PostItem;
