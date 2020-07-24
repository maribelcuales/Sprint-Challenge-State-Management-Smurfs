import React from 'react';
import { connect } from 'react-redux'; 
// import Loader from 'react-loader-spinner'; 

const SmurfsList = () => {
  return(
    <h1>Welcome to Smurf World!</h1>
  );
};

const mapStateToProps = state => {
  console.log("fetching state", state); 
  return {
    smurfs: state.smurfsReducer.smurfs,
    isFetching: state.smurfsReducer.isFetching,
    error: state.smurfsReducer.error
  }
}; 

export default connect(
  mapStateToProps,
  {}
)(SmurfsList); 