import React from 'react';
import {connect} from 'react-redux';
import Results from './results';

const mapStatetoProps = (state) => {
  return {
    pair: state.getIn(['vote','pair']),
    tally: state.getIn(['vote','tally']),
    winner: state.get('winner')
  };
}

const ResultsContainer = connect(mapStatetoProps)(Results);
export default ResultsContainer;
