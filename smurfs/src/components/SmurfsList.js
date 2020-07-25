import React, {useEffect} from 'react';
import { connect } from 'react-redux'; 
import Loader from 'react-loader-spinner'; 

import { fetchSmurf } from '../store/actions/smurfActions.js'; 

const SmurfsList = props => {
  useEffect(() => {
    props.fetchSmurf();
  }, []);
  console.log({ props })

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
  { fetchSmurf }
)(SmurfsList); 