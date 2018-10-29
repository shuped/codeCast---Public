import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import IndexViews from './ViewComponents/IndexViews/IndexViews.jsx';
import Header from './ViewComponents/Header.jsx'



// import logo from './assets/logo.svg';

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <IndexViews />
        </div>

        <div className='electron'>
     
        </div>
      </div>
    );
  }
}




export default (App);


