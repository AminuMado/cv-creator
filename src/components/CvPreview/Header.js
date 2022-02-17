import React from 'react';

function CvHeader({ personalInfo }) {
  const { fullName, title, email, address, phoneNumber } = personalInfo;

  return (
    <div className="cv-header-wrapper">
      <div class="flex-wrapper">
        <div class="header-content-1">
          <h1>{fullName}</h1>
          <p>{title}</p>
        </div>
        <div class="header-content-2">
          <div class="cv-contact-wrapper">
            <h3>
              <a href="#">{email}</a>
            </h3>
            <h3>{address}</h3>
            <h3>{phoneNumber}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvHeader;
