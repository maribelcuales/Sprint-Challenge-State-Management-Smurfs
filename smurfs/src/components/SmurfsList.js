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
    <div>
      <h1>Welcome to Smurf World!</h1>
      {props.isFetching && (
        <Loader 
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )}
      {props.smurfs.map(smurf => {
        console.log({ smurf }); 
        return (
          <div>
            <SmurfCard smurf={smurf}/> 
          </div>
        )
      })}
      {props.error && <p className="error">{props.erro}</p>}
    </div>
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