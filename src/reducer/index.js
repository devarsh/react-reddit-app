import {combineReducers} from 'redux';
import {SUBREDDIT} from '../consts/index.js'
const selectedSubReddit = (state='reactjs',action) => {
	switch(action.type)
	{
		case SUBREDDIT.SELECT:
			return action.subreddit;
		default:
			return state;
	}
}

const subredditPosts = (state={},action) => {
	switch(action.type) {
		case SUBREDDIT.REQUEST:
		case SUBREDDIT.RECIEVE:
		case SUBREDDIT.INVALIDATE:
		case SUBREDDIT.ADD:
		{
			var newPosts = Posts(state[action.subreddit],action);
			return Object.assign({},state,{[action.subreddit] : newPosts });
		}
		default: 
			return state;
	}
} 
const Posts = (state={
				isFetching:false,
				isInvalidate:false,
				items:[]},action) => {
	switch(action.type)
	{
		case SUBREDDIT.REQUEST:
		{
			return Object.assign({},state,{isFetching:true});
		}
		case SUBREDDIT.RECIEVE:
		{
			return Object.assign({},state,{isFetching:false,
				isInvalidate:false,
				items:action.posts,
				reciviedAt : Date.now()});	
		}
		case SUBREDDIT.INVALIDATE:
		{
			return Object.assign({},state,{isInvalidate:true,isFetching:false});
		}
		default:
		{
			return state;
		}
	}	
}

export const Reducers = combineReducers({
	subredditPosts,selectedSubReddit
});


