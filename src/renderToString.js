var React = require('react')
import {renderToString} from 'react-dom/server'

import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {Reducers} from './reducer/index.js'

import {Provider} from 'react-redux'
import {AsyncReddit} from './components/AsyncReddit.jsx'

import {renderFullPage} from './renderFullPage.js'

export const handleRender = (req,res) => {
	const store=createStore(Reducers,applyMiddleware(thunk))

	const html = renderToString(
		<Provider store={store}>
			<div>
				<AsyncReddit/>
			</div>
		</Provider>);

	const initialState = store.getState()

	res.send(renderFullPage(html,initialState))
}


