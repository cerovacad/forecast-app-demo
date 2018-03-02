import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import rootReducer from './reducers/rootReducer';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
