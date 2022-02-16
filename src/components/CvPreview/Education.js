import React from 'react';

function Education({ education }) {
  const educationItems = education.map((educationItem, index) => {
    return (
      <div className="education-item-wrapper" key={index}>
        <h2 className="education-school-name">{educationItem.schoolName}</h2>
        <h2 className="education-school-location">
          {educationItem.schoolLocation}
        </h2>
        <h2 className="education-degree">{educationItem.degree}</h2>
        <h2 className="education-major">{educationItem.major}</h2>
        <h2 className="education-gpa">{educationItem.gpa}</h2>
        <div className="education-period">
          {educationItem.startDate} - {educationItem.endDate}
        </div>
      </div>
    );
  });
  return <div>{educationItems}</div>;
}

export default Education;
