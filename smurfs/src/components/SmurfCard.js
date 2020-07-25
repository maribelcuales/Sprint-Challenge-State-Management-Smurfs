import React from 'react'; 

const SmurfCard = ({ smurf }) => {
  return (
    <div>
    {smurf.map(item => {
      return (
        <div>
          <h3> Name: {item.name} </h3>
          <p>Age: {item.age} </p>
          <p>Height: {item.height}</p>
        </div>
      )
    })}
    </div>
  )
}

export default SmurfCard;  