import reducer from '../src/reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import {expect} from 'chai';
import {List,Map,fromJS} from 'immutable';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('reducer',()=>{
  it('handles SET_STATE',()=>{
    const state = Map();
    const action = {
      type:'SET_STATE',
      state: fromJS({
        vote:{
          pair:['Trainspotting','The Usual Suspects'],
          tally:{'Trainspotting':3,'The Usual Suspects':4}
        }
      })
    };
    expect(reducer(state,action)).to.equal(fromJS({
      vote:{
        pair:['Trainspotting','The Usual Suspects'],
        tally:{'Trainspotting':3,'The Usual Suspects':4}
      }
    }));
  });
  it('handles SET_STATE with plain JS input',()=>{
    const state = Map();
    const action = {
      type:'SET_STATE',
      state: {
        vote:{
          pair:['Trainspotting','The Usual Suspects'],
          tally:{'Trainspotting':3,'The Usual Suspects':4}
        }
      }
    };
    expect(reducer(state,action)).to.equal(fromJS({
      vote:{
        pair:['Trainspotting','The Usual Suspects'],
        tally:{'Trainspotting':3,'The Usual Suspects':4}
      }
    }));
  });
  it('handles SET_STATE with no initial state',()=>{
    const state = undefined;
    const action = {
      type:'SET_STATE',
      state: {
        vote:{
          pair:['Trainspotting','The Usual Suspects'],
          tally:{'Trainspotting':3,'The Usual Suspects':4}
        }
      }
    };
    expect(reducer(state,action)).to.equal(fromJS({
      vote:{
        pair:['Trainspotting','The Usual Suspects'],
        tally:{'Trainspotting':3,'The Usual Suspects':4}
      }
    }));
  });
});
