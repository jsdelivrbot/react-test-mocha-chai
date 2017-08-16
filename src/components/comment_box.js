import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state = { comment: '' };
	}

	handleChange(event) {
		this.setState({ comment: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="comment-box form-control">
				<h3>React Testing Using Chai/Mochi</h3>
				<h4>Add a comment</h4>
				<textarea 
					className="form-control"
					value={this.state.comment}
					onChange={this.handleChange.bind(this)} />
				<br/>
				<button action="submit" className="btn btn-primary">Submit Comment</button>
			</form>
		);
	}
}

export default connect(null, actions)(CommentBox);