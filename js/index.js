require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import RepositoryList from './components/repository-list';

import store from './store';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
    	<Provider store={store}>
    		<RepositoryList />
    	</Provider>, 
    	document.getElementById('app'))
);
