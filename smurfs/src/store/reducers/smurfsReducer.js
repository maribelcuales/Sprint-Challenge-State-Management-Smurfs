const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
}

export const smurfsReducer = (state=initialState , action) => {
  switch (action.type) {
    case "FETCH_SMURF_START": 
      return {
        ...state, 
        isFetching: true
      };
    case "FETCH_SMURF_SUCCESS": 
      return {
        ...state,
        isFetching: false,
        smurfs: [...state.smurfs, action.payload],
        error: ""
      };
    case "FETCH_FILM_FAILUIRE": 
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default: 
    return state;
  }
}