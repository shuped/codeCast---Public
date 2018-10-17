import React, { Component } from 'react'
import { connect } from 'react-redux'

//boilerplate for component to access redux

function ReactComponent(props) {
  //component to use/update redux state
}

function mapStateToProps(state) {
  return {
    //state mapping here    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //dispatch actions here
  };   
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
