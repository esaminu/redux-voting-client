import React from 'react';

const Vote = ({pair,vote,hasVoted}) =>
  <div className='Vote'>
    {pair.map(entry =>
      <button key={entry} onClick={() => vote(entry)} disabled={!!hasVoted}>
        <h1>{entry}</h1>
        {entry === hasVoted ?
          <div className='label'>Voted</div> :
          null
        }
      </button>
    )}
  </div>



export default Vote;
