import React from 'react';
import Vote from './Vote';
import Winner from './winner';
import connect from 'react-redux'

const Voting = ({pair,vote,hasVoted,winner}) =>
  <div>
    {winner ? <Winner winner={winner}/>  :
      <Vote pair={pair} vote={vote} hasVoted={hasVoted}/>
    }
  </div>

export default Voting;
