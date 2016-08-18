import React from 'react';
import Vote from './Vote';
import Winner from './winner';

const Voting = ({pair,vote,hasVoted,winner}) =>
  <div>
    {winner ? <Winner winner={winner}/>  :
      <Vote pair={pair} vote={vote} hasVoted={hasVoted}/>
    }
  </div>

// class Voting extends React.Component {
//   render(){
//     return <div>
//           {this.props.winner ?
//             <Winner ref="winner" winner={this.props.winner} /> :
//             <Vote {...this.props} />}
//         </div>;
//   }
// }
// export default React.createClass({
//   render: function() {
//     return <div>
//       {this.props.winner ?
//         <Winner ref="winner" winner={this.props.winner} /> :
//         <Vote {...this.props} />}
//     </div>;
//   }
// });

export default Voting;
