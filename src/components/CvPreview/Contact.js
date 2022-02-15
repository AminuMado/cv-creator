import React from 'react';

function CvContact({ personalInfo }) {
  const { address, phoneNumber, email } = personalInfo;

  return (
    <div className="cv-contact-wrapper">
      <h1>Contact</h1>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <p>{address}</p>
    </div>
  );
}

export default CvContact;
