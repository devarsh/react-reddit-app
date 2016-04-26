import {PropTypes} from 'react';
var React = require('react');

export const Reddit = ({reddit}) => {
	return (<li>
		<div>{reddit.title}</div>
		<div>{reddit.author}</div>
		<p>{reddit.selftext}</p>
		</li>);
}

Reddit.propTypes = {
	reddit : PropTypes.object.isRequired,
}

