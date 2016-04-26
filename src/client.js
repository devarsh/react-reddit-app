var React = require('react');
import {render} from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {Reducers} from 'reducer/index.js'

import {Provider} from 'react-redux'
import {AsyncReddit} from 'components/AsyncReddit.jsx'

const logger = createLogger()
let initialState
if(window)
{
	initialState = window.__INITIAL_STATE__
}

render( <Provider store={createStore(Reducers,initialState,applyMiddleware(thunk ,logger))} >
		<div>
			<AsyncReddit/>
		</div>
		</Provider>,
	document.getElementById('root'));
