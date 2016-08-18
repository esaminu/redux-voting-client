import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,hashHistory} from 'react-router';
import VotingContainer from './components/VotingContainer';
import App from './components/App.jsx';
import ResultsContainer from './components/ResultsContainer.jsx';
import immutable from 'immutable';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import io from 'socket.io-client';
import {Map,List} from 'immutable';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const socket = io(document.location.protocol+'//'+document.location.hostname+':8090');

const logger = createLogger();
const store = createStore(reducer,applyMiddleware(thunk, promise, logger));

const routes = <Route component={App}>
  <Route path="/" component={VotingContainer}/>
  <Route path="/results" component={ResultsContainer}/>
</Route>;

socket.on('state',state => {
  console.log(state);
  store.dispatch({type: 'SET_STATE', state:state})
});

// store.dispatch({
//   type: 'SET_STATE',
//   state: {
//     vote: {
//       pair: ['Sunshine', '28 Days Later'],
//       tally: {Sunshine: 2}
//     }
//   }
// });


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '29 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});
