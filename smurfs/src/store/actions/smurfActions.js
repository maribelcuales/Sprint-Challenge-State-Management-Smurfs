import axios from 'axios'; 

export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const fetchSmurf = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_SMURF_START' }); 
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response); // response.data
        dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: response.data})
      })
      .catch(error => {
        console.log({error});
        dispatch({ type: 'FETCH_SMURF_FAILURE', payload: `${error}`})
      });
  };
};

export const addSmurf = newSmurf => {
  return { type: "ADD_NEW_SMURF", payload: newSmurf }
}