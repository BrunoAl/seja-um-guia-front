import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { getCategoriesJokesCategoriesRequest } from './actions/chuckNorrisActions'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(getCategoriesJokesCategoriesRequest())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
