import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function CvHeader({ personalInfo }) {
  const { fullName, title, email, address, phoneNumber } = personalInfo;

  return (
    <div className="cv-header-wrapper">
      <div className="cv-flex-wrapper-header">
        <div className="header-content-1">
          <h1>{fullName}</h1>
          <p>{title}</p>
        </div>
        <div className="header-content-2">
          <div className="cv-contact-wrapper">
            <h3>
              <a href="#">
                <FontAwesomeIcon className="email-icon" icon={faEnvelope} />
                {email}
              </a>
            </h3>
            <h3>
              <FontAwesomeIcon className="location-icon" icon={faLocationDot} />
              {address}
            </h3>
            <h3>
              <FontAwesomeIcon className="phone-icon" icon={faPhone} />
              {phoneNumber}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvHeader;
