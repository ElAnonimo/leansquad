import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
	useEffect(() => {
		getPost(match.params.id);
	}, [getPost, match.params.id]);

	return (
		loading || post === null
			? <Spinner />
			: <Fragment>
				<Link to='/' className='btn'>Back to all posts</Link>
				<PostItem post={post} showPostBtn={false} />
				<CommentForm postId={post.id} />
				<div className='comments'>
					{post.comments && post.comments.length > 0 && post.comments.map(comment => (
						<CommentItem key={comment.id} comment={comment} postId={post.id} />
					))}
				</div>
			</Fragment>
	);
};

Post.propTypes = {
	post: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
