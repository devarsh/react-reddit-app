import {SUBREDDIT} from '../consts/index.js'
const requestMaker = (topic) => `https://api.reddit.com/r/${topic}`

export const selectSubreddit = (subreddit) => { 
	return {
		type : SUBREDDIT.SELECT,
		subreddit
	}
}

export const addSubreddit = (subreddit) => {
	return {
		type: SUBREDDIT.ADD,
		subreddit
	}
}

export const requestSubreddit = (subreddit) => {
	return {
		type : SUBREDDIT.REQUEST,
		subreddit
	}
}

export const recieveSubreddit = (subreddit,posts) => {
	return {
		type : SUBREDDIT.RECIEVE,
		subreddit,
		posts
	}
}

export const invalidateSubreddit = (subreddit) => {
	return {
		type : SUBREDDIT.INVALIDATE,
		subreddit
	}
}

export const fetchReddit = (subreddit) => {
	return (dispatch,getState) =>
	{
		dispatch(requestSubreddit(subreddit))
		let fpromise = fetch(requestMaker(subreddit)).
		then(data=>data.json()).then( json => { 
			let fetchedChild = json.data.children.map(child => child.data)
			dispatch(recieveSubreddit(subreddit,fetchedChild));
			});
		fpromise.catch(e=>dispatch(invalidateSubreddit(subreddit)))
	}
}
export const ShouldFetch = (state,subreddit) =>  {
	const posts = state.subredditPosts[subreddit];
	if(!posts)
	{
		return true;
	}
	else if(posts.isFetching)
	{
		return false;
	}
	else
	{ 
		posts.isInvalidate;
	}
}
export const fetchPostsIfRequired = (subreddit) => {
	return (dispatch,getState) =>
	{
		const shouldFetch = ShouldFetch(getState(),subreddit);
		if(!shouldFetch)
		{
			return Promise.resolve();
		}
		else
		{
			dispatch(fetchReddit(subreddit));
		}
	}
}


