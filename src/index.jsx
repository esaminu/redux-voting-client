import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,hashHistory} from 'react-router';
import VotingContainer from './components/VotingContainer';
import App from './components/App.jsx';
import ResultsContainer from './components/ResultsContainer.jsx';
import immutable from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);
store.dispatch({
  type:'SET_STATE',
  state: {
    vote: {
      pair: ['The Usual Suspects','Silence of the Lambs'],
      tally: {'The Usual Suspects':3,'Silence of the Lambs':5}
    }
  }
});
const pair = ["The Usual Suspects","Silence of the Lambs"];

const routes = <Route component={App}>
  <Route path="/" component={VotingContainer}/>
  <Route path="/results" component={ResultsContainer}/>
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
