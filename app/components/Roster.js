import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import FullRoster from './FullRoster';
import Player from './Player';

const PlayerAPI = {
  players: [
    { number: 1, name: 'Tidus', position: 'G' },
    { number: 2, name: 'Kimari', position: 'H' },
    { number: 3, name: 'Wakka', position: 'I' },
  ],
  all: function () {
    return this.players;
  },
  get: function(id) {
    const isPlayer = p => p.number === id;
    return this.players.find(isPlayer);
  }
};

class Roster extends React.Component {
   render() {
     return (
       <Switch>
         <Route exact path='/roster' component={FullRoster}/>
         <Route path='/roster/:number' component={Player} />
       </Switch>
     )
   }
}

export default Roster;
