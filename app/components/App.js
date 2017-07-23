import React from 'react';
import ReactRouter from 'react-router-dom';
import Nav from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className='main-container'>
        <BrowserRouter>
          <Nav/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
