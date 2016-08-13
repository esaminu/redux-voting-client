import React from 'react';
import Voting from './voting';
import {connect} from 'react-redux';

const mapStatetoProps = (state) => {
  return {
    pair: state.getIn(['vote','pair']),
    winner: state.get('winner')
  }
}

const VotingContainer = connect(mapStatetoProps)(Voting);
export default VotingContainer;
