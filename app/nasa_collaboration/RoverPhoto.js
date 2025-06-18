import React from "react";

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div>
      <img src={src} alt={`Photo taken by ${roverName}`} />
      <p>Date: {date}</p>
      <p>Rover: {roverName}</p>
    </div>
  );
};

export default RoverPhoto;
