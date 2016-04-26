import {PropTypes,Component} from 'react'
import * as Actions from '../actions/index.js'
import {connect} from 'react-redux'
import {FilterReddit} from './FilterReddit.jsx'
import {AddReddit} from './AddReddit.jsx'
import {RedditList} from './RedditList.jsx'

var React = require('react')

const Async = class Async extends Component {
	constructor(props) {
		super(props)
		this.state = {currentInput : '',error:false }
		this.addRedditSubmitHandler = this.addRedditSubmitHandler.bind(this)
		this.addRedditChangeHandler = this.addRedditChangeHandler.bind(this)
		this.selectionChangeHandler = this.selectionChangeHandler.bind(this)
	}
	componentDidMount()
	{
		const {dispatch} = this.props
		dispatch(Actions.selectSubreddit('reactjs'))
		dispatch(Actions.fetchPostsIfRequired('reactjs'))
	}
	selectionChangeHandler(selectedOption) {
		const {dispatch} = this.props
		dispatch(Actions.selectSubreddit(selectedOption))
		dispatch(Actions.fetchReddit(selectedOption))
	}
	addRedditChangeHandler(value)
	{
		this.setState({currentInput:value})
	}
	addRedditSubmitHandler()
	{
		const {allReddits,dispatch} = this.props
		const {currentInput} = this.state
		let exists = allReddits.filter(value => value === currentInput )
		if(exists.length)
		{
			this.setState({error:true,errorText :'Reddit Already Exists'})
		}
		else
		{
			dispatch(Actions.addSubreddit(currentInput))
			this.setState({error:false,currentInput:''})
		}
	}
	render() {
		const {allReddits,selectedSubReddit,filter,isLoading,fetchError} = this.props
		return (
		<div>
			<AddReddit 
			allReddits={allReddits} 
			addRedditChangeHandler={this.addRedditChangeHandler}
			addRedditSubmitHandler={this.addRedditSubmitHandler}
			inputError={{error:this.state.error,errorText:this.state.errorText}}
			inputText={this.state.currentInput}
			/>
			<FilterReddit 
			allReddits={allReddits} 
			selectedSubReddit={selectedSubReddit}
			selectionChangeHandler={this.selectionChangeHandler} 
			/>
			<RedditList 
			filter={filter}
			isLoading={isLoading} 
			selectedSubReddit={selectedSubReddit}
			fetchError={fetchError}
			/>
		</div>);
	}

}

const mapStateToProps = ({subredditPosts,selectedSubReddit}) => {
	 let allReddits = Object.keys(subredditPosts)
	 let filter = subredditPosts[selectedSubReddit] ? subredditPosts[selectedSubReddit].items : []
	 let isLoading = subredditPosts[selectedSubReddit] ? subredditPosts[selectedSubReddit].isFetching : false
	 let fetchError = subredditPosts[selectedSubReddit] ? subredditPosts[selectedSubReddit].isInvalidate : false
	return {
		allReddits,
		selectedSubReddit,
		filter,
		isLoading,
		fetchError
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}

export const AsyncReddit = connect(mapStateToProps,mapDispatchToProps)(Async)