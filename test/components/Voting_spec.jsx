import Voting from '../../src/components/voting';
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import {expect} from 'chai';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('Voting',()=>{
  let component = mount(
    <Voting pair={["Trainspotting","28 days later"]}/>
  );
  it('renders a pair of buttons',()=>{

    const buttons = component.find('button');

    expect(buttons.length).to.equal(2);

  });
  it('invokes callback on button click',()=>{
    let votedWith;
    const vote = (entry) => {votedWith=entry};
    component = mount(
      <Voting pair={["Trainspotting","28 days later"]} vote={vote}/>
    );
    const Trainspotting = component.find('button').at(0);
    Trainspotting.simulate('click');
    expect(votedWith).to.equal('Trainspotting');
  });
  it('disables button when user has voted',()=>{
    component = mount(
      <Voting pair={["Trainspotting","28 days later"]} hasVoted={'Trainspotting'}/>
    );
    const Trainspotting = component.find('button').at(0);
    const DaysLater = component.find('button').at(1);
    expect(Trainspotting.prop('disabled')).to.equal(true);
    expect(DaysLater.prop('disabled')).to.equal(true)
  });
  it('renders a label over the voted entry',()=>{
    component = mount(
      <Voting pair={["Trainspotting","28 days later"]} hasVoted={'Trainspotting'}/>
    );
    const Trainspotting = component.find('button').at(0);
    const voted = Trainspotting.childAt(1);
    expect(voted.text()).to.equal('Voted');
  });
  it('shows only the winner when there is one',()=>{
    component = mount(
      <Voting pair={["Trainspotting","28 Days later"]} winner={"Trainspotting"}/>
    );
    const won = component.children();
    expect(won.length).to.equal(1);
    expect(component.childAt(0).name()).to.equal('Winner');
  });
});
