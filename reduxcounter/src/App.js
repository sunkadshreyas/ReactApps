import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Counter from './Counter';

// Map Redux State to Component Props
function mapStateToProps(state){
  return {
    countValue : state.count,
  }
}

// Actions
var increaseAction = {type : "increase"};
var decreaseAction = {type : "decrease"};

function mapDispatchToProps(dispatch){
  return {
    increaseCount : () => {
      return dispatch(increaseAction);
    },
    decreaseCount : () => {
      return dispatch(decreaseAction);
    }
  }
}

var connectedComponents = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default connectedComponents;
