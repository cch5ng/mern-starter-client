import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import reducers from './store/index.js'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(appStore,
//   composeEnhancers(
//     applyMiddleware(ReduxThunk)
//   )
// )

//store={store}

ReactDOM.render(<Provider ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
