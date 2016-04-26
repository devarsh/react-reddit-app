import {PropTypes} from 'react';
var React = require('react');

export const FilterReddit = ({allReddits,selectedSubReddit,selectionChangeHandler}) => {
 	let options = [];
	let redditsOptions = allReddits.map((oneReddit,index) => <option key={index} value={oneReddit}>{oneReddit}</option>)
	return (
		<div>
			<select value={selectedSubReddit} onChange={e => selectionChangeHandler(e.target.value) }>
				{redditsOptions}
			</select>
		</div>
	)
}

FilterReddit.PropTypes = {
	allReddits : PropTypes.array.isRequired,
	selectedSubReddit : PropTypes.string.isRequired,
	selectionChangeHandler : PropTypes.func.isRequired,
}
