import React from 'react';
import PropTypes from 'prop-types';

const CommentItem = ({ comment: { id, body, postId } }) => {
	return (
		<div className='post bg-white p-1 my-1'>
			<p>{body}</p>
		</div>
	);
};

CommentItem.propTypes = {
	comment: PropTypes.shape({
		id: PropTypes.number.isRequired,
		body: PropTypes.string.isRequired,
		postId: PropTypes.number.isRequired
	}).isRequired
};

export default CommentItem;
