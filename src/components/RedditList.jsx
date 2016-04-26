import {PropTypes} from 'react';
import {Reddit} from './Reddit.jsx'
var React = require('react');

export const RedditList = ({filter,isLoading,selectedSubReddit,fetchError}) => {
{
		let content
		if(isLoading)
		{
			content =  <div>Loading...</div>
		}
		else if(fetchError)
		{
			content = <div>Oops something went wrong :'(</div>
		}
		else 
		{
			content = 
			filter.map(oneReddit => <Reddit key={oneReddit.id} reddit={oneReddit} />)
		}
		return (
			<div>
				<div>
					Topic: {selectedSubReddit} 
				</div>
				<ul>
					{content}
				</ul>
			</div>
				)
	}
}

RedditList.propTypes = {
	filter : PropTypes.array.isRequired,
	isLoading : PropTypes.bool.isRequired,
	selectedSubReddit : PropTypes.string.isRequired,
}



