import React, { useState } from 'react';
import { connect } from 'react-redux'; 

import { addNewSmurf, fetchSmurf } from '../store/actions/smurfActions'; 

const SmurfForm = props => {

  const initialFormValues = {
    name: "",
    age: 0,
    height: "",
    id: 0
  }

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = e => {
    // e.preventDefault(); 
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }; 

  const handleSubmit = e => {
    props.addNewSmurf({
      name: formValues.name,
      age: formValues.age,
      height: formValues.height
    });
    // props.fetchSmurf(); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChanges}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChanges}
            placeholder="Age"
          />
          <input
            type="text"
            name="height"
            value={formValues.height}
            onChange={handleChanges}
            placeholder="Height"
          />
        </div>
        <button>Add Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  console.log("smurf form", state); 
  return {
    name: state.smurfsReducer.smurfs.name,
    age: state.smurfsReducer.smurfs.name,
    height: state.smurfsReducer.smurfs.height
  }
}; 

export default connect(
  mapStateToProps,
  {addNewSmurf, fetchSmurf}
)(SmurfForm); 