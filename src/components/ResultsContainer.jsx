import React from 'react';
import {connect} from 'react-redux';
import Results from './results';

const mapStateToProps = (state) => {
  return {
    pair: state.getIn(['vote','pair']),
    tally: state.getIn(['vote','tally']),
    winner: state.get('winner')
  };
}

const ResultsContainer = connect(mapStateToProps)(Results);
export default ResultsContainer;
