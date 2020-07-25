const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
}

export const smurfsReducer = (state = initialState , action) => {
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
    case "ADD_NEW_SMURF": 
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload] 
      }; 
    case "ADD_SMURF_FAILURE":
      return {
        ...state,
        error: action.payload
      }
    case "GET_ALL_SMURFS": 
      return {
        ...state
      }
    default: 
      return state;
  }
}