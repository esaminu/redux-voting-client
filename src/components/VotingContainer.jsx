import React from 'react';
import Voting from './voting';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  console.log('map');
  return {
    pair: state.getIn(['vote','pair']),
    winner: state.get('winner')
  };
}

//const VotingContainer = connect(mapStateToProps)(Voting);
export default connect(mapStateToProps)(Voting);
