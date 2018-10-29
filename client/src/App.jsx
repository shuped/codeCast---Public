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

<<<<<<< HEAD
        <div className='electron'>
     
        </div>
=======

>>>>>>> 821e2379978c16064807c07cb89d5efa520a700f
      </div>
    );
  }
}




export default (App);


