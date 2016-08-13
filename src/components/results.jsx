import React from 'react';
import {Map} from 'immutable';
import Winner from './winner';

const Results = ({winner,pair,tally,next}) =>
  <div>
    {winner ?  <Winner winner={winner}/> :
      <div className='results'>
        <div className='tally'>
          {pair.map(entry =>
            <div key={entry} className='entry'>
              <h1>{entry}</h1>
              <div>{(tally && tally.has(entry)) ? tally.get(entry) : 0}</div>
            </div>
          )}
        </div>
        <div className='management'>
          <button className='next' onClick={next}>
            Next
          </button>
        </div>
      </div>
    }
  </div>

export default Results;
