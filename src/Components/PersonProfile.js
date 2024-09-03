import React from 'react';

const PersonProfile = ({ person }) => {
  return (
    <div>
      <h1>{person.fullName}</h1>
      <p>{person.bio}</p>
      <img src={person.imgSrc} alt={person.fullName} />
      <p><strong>Occupation:</strong> {person.Occupation}</p>
    </div>
  );
};

export default PersonProfile;
