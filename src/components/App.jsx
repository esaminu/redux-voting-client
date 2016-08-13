import React from 'react';
import {List,Map} from 'immutable';

const pair = List.of('Trainspotting','28 Days Later');
const tally = Map({'Trainspotting':3,'28 Days Later':2});

const App = ({children}) => children;

export default App;
