import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/index';
import AppBookDetail from './containers/indexBookDetail';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import reducerApp from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducerApp, composeEnhancers(
  
// ));
const store = createStore(reducerApp);

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/book/:id" component={AppBookDetail} />
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
