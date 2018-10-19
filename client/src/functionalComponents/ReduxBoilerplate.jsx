import React, { Component } from 'react'
import { connect } from 'react-redux'
import { INCREMENT } from '../../redux/actions/index';

//boilerplate for component to access redux

function ReactComponent(props) {
  //component to use/update redux state
  return (
    <button onClick="() => props.incrementCounter(9)">im some stuff. state:{props.counter}</button>
  )
}












function mapStateToProps(state) {
  return {
    counter: state.counter  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: (number) => dispatch(INCREMENT(number))
  };   
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactComponent);
