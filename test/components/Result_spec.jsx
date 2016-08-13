import Results from '../../src/components/results';
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import {expect} from 'chai';
import {List,Map} from 'immutable';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Result',()=>{
  it('renders entries with vote counts or 0',()=>{
    const pair = List.of('Trainspotting','The Usual Suspects');
    const tally = Map({'Trainspotting':3});
    let component = mount(
      <Results pair={pair} tally={tally}/>
    );
    const entries = component.find('.entry');
    expect(entries.length).to.equal(2);
    expect(entries.first().childAt(0).text()).to.equal('Trainspotting');
    expect(entries.first().childAt(1).text()).to.equal('3');
    expect(entries.last().childAt(0).text()).to.equal('The Usual Suspects');
    expect(entries.last().childAt(1).text()).to.equal('0');
  });
  it('invokes callback on next button click',()=>{
    let nextInvoked = false;
    const next = () => nextInvoked = true
    const pair = List.of('Trainspotting', 'The Usual Suspects');
    let component = mount(
      <Results pair={pair} tally={Map()} next={next}/>
    );
    const nextButton = component.find('button');
    nextButton.simulate('click');
    expect(nextInvoked).to.equal(true);
  });
  it('displays only the winner when ther is one', ()=>{
    let component = mount(
      <Results winner='The Usual Suspects'/>
    );
    const won = component.children();
    expect(won.length).to.equal(1);
    expect(component.childAt(0).name()).to.equal('Winner');
  });
});
