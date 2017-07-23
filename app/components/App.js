import React from 'react';
import Nav from './Nav';
import Roster from './Roster';
import Schedule from './Schedule';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main-container'>
          <Nav/>
          <Route path='/roster' component={Roster} />
          <Route path='/schedule' component={Schedule} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
