import React from 'react';
import ReactDOM from 'react-dom';
import SocialRestaurantApp from './components/SocialRestaurantApp';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const logger = store => next => action => {
      console.group(action.type);
      console.info('dispatching', action);
      let result = next(action);
          console.log('next state', store.getState());
          console.groupEnd(action.type);
          return result
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create Store
const store = createStore(
    reducer,
    composeEnhancers(
       applyMiddleware(thunk),
       applyMiddleware(logger)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <SocialRestaurantApp />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
