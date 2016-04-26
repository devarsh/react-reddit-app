import {PropTypes,Component} from 'react';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';
var React = require('react');

export const AddReddit = ({allReddits,enterDetected,addRedditChangeHandler,addRedditSubmitHandler,inputError,inputText}) => {
	let errorText = ''
	if(inputError.error)
	{
		errorText = inputError.errorText
	}
	return (
		<div>
			<input 
			type='text' 
			onChange={ e => addRedditChangeHandler(e.target.value) }  
			onKeyPress={e => { 
				let key=e.keyCode || e.which
				if(key===13) { addRedditSubmitHandler() }   
			}}
			value={inputText}/>
			<span>{errorText}</span>
			<button onClick={ () => addRedditSubmitHandler() }>Add Reddit</button>
		</div>
		)
}

AddReddit.propTypes = {
		allReddits : PropTypes.array.isRequired,
		addRedditChangeHandler : PropTypes.func.isRequired,
		addRedditSubmitHandler : PropTypes.func.isRequired,
		inputError : PropTypes.object.isRequired,
		inputText : PropTypes.string.isRequired,
	}
