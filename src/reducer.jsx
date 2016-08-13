import React from 'react';
import {List,Map,fromJS} from 'immutable';

const reducer = (state = Map(),action) => {
  switch(action.type){
    case 'SET_STATE': return state.merge(action.state);
  }
}

export default reducer;
