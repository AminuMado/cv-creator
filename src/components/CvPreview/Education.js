import React from 'react';

function CvEducation(props) {
  const { education } = props;
  const educationItems = education.map((educationItem, index) => {
    return (
      <div className="education-item-wrapper" key={index}>
        <div className="education-header">
          <div className="cv-flex-wrapper">
            <h2 className="education-school-name">
              {educationItem.schoolName}
            </h2>
            <h4 className="education-school-location">
              {educationItem.schoolLocation}
            </h4>
          </div>
          <div className="education-period">
            {educationItem.startDate} {` -${educationItem.endDate}`}
          </div>
        </div>
        <div className="cv-flex-wrapper">
          <h2 className="education-degree">{educationItem.degree}</h2>
          <h2 className="education-major">{educationItem.major}</h2>
          <h4 className="education-gpa">{educationItem.gpa} GPA</h4>
        </div>
      </div>
    );
  });
  return (
    <div className="cv-education-wrapper">
      <div className="title-container">
        <h2>Education</h2>
      </div>
      <div className="content-container">{educationItems}</div>
    </div>
  );
}

export default CvEducation;
