import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
	const list = props.comments.map((comment, index) => {
		return <li key={index} className="list-group-item">{index + 1}. {comment}</li>
	});

	return (
		<ul className="comment-list list-group">
			{list}
		</ul>
	);
}

function mapStateToProps(state) {
	return {
		comments: state.comments
	};
}

export default connect(mapStateToProps)(CommentList);